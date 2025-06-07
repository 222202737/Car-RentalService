import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import HeroPages from '../../components/HeroPages';
import Footer from '../../components/Footer';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
  };

  return (
    <section className="login-page">
        <HeroPages name="Login" />
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <FaEnvelope />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaLock />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Register</a>
          <br />
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </form>
    </div>
    <Footer />
    </section>
    
  );
}

export default Login;
