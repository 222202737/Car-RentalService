import { useState } from 'react';
import HeroPages from "../components/HeroPages";
import Footer from "../components/Footer";
import "./Contact.css";
import api from '../services/api';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await api.post('/contact', formData);
      setSuccess('Message sent successfully!');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; +91 96266 24327
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carrental@service.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Chennai,
                Tamilnadu
              </a>
            </div>
            <div className="contact-div__form">
              <form onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
                
                <label>
                  Full Name <b>*</b>
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder='E.g: "Mohan"'
                  required
                />

                <label>
                  Email <b>*</b>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="youremail@example.com"
                  required
                />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Here.."
                  required
                />

                <button type="submit" disabled={loading}>
                  {loading ? (
                    'Sending...'
                  ) : (
                    <>
                      <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                      Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+91 96266 24327</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
