import React from 'react';
import './App.css';
import GlowEffects from './components/GlowEffects';
import Badge from './components/Badge';
import Title from './components/Title';
import Tagline from './components/Tagline';
import Divider from './components/Divider';
import NotifyForm from './components/NotifyForm';
import DemoVideo from './components/DemoVideo';
import Footer from './components/Footer';

const LOGO_URL =
  'https://lh3.googleusercontent.com/d/12ksLMZu3EnD2Gyw-4URwRGvarog5usj3';

function App() {
  return (
    <>
      {/* Ambient background glows */}
      <GlowEffects />

      {/* Main content */}
      <div className="container">
        {/* Logo */}
        <div className="logo-wrapper">
          <img
            src={LOGO_URL}
            alt="OnlineSCADA Logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Status Badge */}
        <Badge />

        {/* Title */}
        <Title />

        {/* Tagline */}
        <Tagline />

        {/* Divider */}
        <Divider />

        {/* Demo Video */}
        <DemoVideo />

        {/* Notify Section */}
        <NotifyForm />

        {/* Contact Info */}
        <div className="contact-container">
          <p className="contact-text">
            For more info contact{' '}
            <a href="tel:+919322660412" className="contact-link">
              9322660412
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;