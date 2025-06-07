import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import HeroPages from '../../components/HeroPages';
import Footer from '../../components/Footer';
import './Auth.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registering ${form.name}`);
  };

  return (
    <section className="register-page">
        <HeroPages name="Register" />
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser />
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="input-group">
          <FaEnvelope />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="input-group">
          <FaLock />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    <Footer />
    </section>

  );
}

export default Register;
