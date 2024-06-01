import React, { useState } from 'react';
import './URLShortener.css';

const URLShortener = () => {
  const [shortUrl, setShortUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedShortUrl = 'https://short.url/example'; // Replace with actual URL shortening logic
    setShortUrl(generatedShortUrl);
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(generatedShortUrl)}&size=100x100`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('URL copied to clipboard!');
  };

  return (
    <div className="maincontainer">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="long-url">Enter or Paste Your long URL:</label>
        <input
          type="text"
          id="long-url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div id="short-url-container">
          <p>Here's your shortened URL:</p>
          <div id="short-url">
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <button id="copy-btn" style={{ width: '20px', padding: '8px 50px', fontSize: '14px',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Copy
      </button>
          </div>
          {qrCode && (    
            <div id="qr-code">
              <img src={qrCode} alt="QR Code" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default URLShortener;
