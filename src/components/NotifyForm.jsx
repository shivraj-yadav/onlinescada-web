import React, { useState } from 'react';

const NotifyForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    try {
      const sheetUrl = process.env.REACT_APP_GOOGLE_SHEET_URL;

      if (!sheetUrl || sheetUrl.includes('placeholder')) {
        console.log('Google Sheet URL not configured or using placeholder. Simulating submission. Captured:', email);
        // Simulate API delay for simulation mode
        await new Promise((resolve) => setTimeout(resolve, 800));
      } else {
        // Send to Google Sheets Web App. Mode 'no-cors' is used because Apps Script 
        // redirects (302) are blocked by standard CORS policies, but 'no-cors' allows 
        // the submission to complete successfully.
        await fetch(sheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            email: email,
            timestamp: new Date().toISOString(),
          }).toString(),
        });
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Subscription failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="success-msg">
        ✓ Thank you! We'll let you know when we launch.
      </div>
    );
  }

  return (
    <>
      <div className="notify-label">Be the first to know when we launch</div>

      <form className="notify-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="notify-input"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          aria-label="Email address"
        />
        <button
          type="submit"
          className="notify-btn"
          disabled={loading}
          style={loading ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
        >
          {loading ? 'Sending...' : 'Notify Me'}
        </button>
      </form>

      <p className="notify-note">No spam. Just one launch email.</p>
    </>
  );
};

export default NotifyForm;