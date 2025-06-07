import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Add token to requests if user is logged in
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  register: (userData) => api.post('/users/register', userData),
  login: (credentials) => api.post('/users/login', credentials),
};

export const users = {
  getAll: () => api.get('/users'),
};

export const cars = {
  getAll: () => api.get('/cars'),
  getById: (id) => api.get(`/cars/${id}`),
};

export const bookings = {
  create: (bookingData) => api.post('/bookings', bookingData),
  getUserBookings: () => api.get('/bookings/user'),
  updateStatus: (id, status) => api.patch(`/bookings/${id}/status`, { status }),
};

export default api;