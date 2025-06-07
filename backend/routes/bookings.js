const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

// Create booking
router.post('/', auth, async (req, res) => {
  try {
    const booking = new Booking({
      ...req.body,
      user: req.userData.userId
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking' });
  }
});

// Get user bookings
router.get('/user', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userData.userId })
      .populate('car')
      .sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});

// Update booking status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, user: req.userData.userId },
      { status: req.body.status },
      { new: true }
    );
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking status' });
  }
});

module.exports = router;