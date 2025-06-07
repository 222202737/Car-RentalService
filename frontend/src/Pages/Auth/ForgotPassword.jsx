import React, { useState } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import HeroPages from '../../components/HeroPages';
import Footer from '../../components/Footer';
import './Auth.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <section className="forgot-password-page">
        <HeroPages name="Forgotpassword" />
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <div className="input-group">
          <FaEnvelopeOpenText />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
    <Footer />
    </section>
  );
}

export default ForgotPassword;
