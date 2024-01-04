import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleContactClick = () => {
    setShowContactInfo(true);
  };

  const handleCloseClick = () => {
    setShowContactInfo(false);
  };

  return (
    <>
      <Header onContactClick={handleContactClick} />
      <Body />
      <Footer />
      {showContactInfo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseClick}>&times;</span>
            <h4>Contact Information</h4>
            <p>Email: contact@frostframegaming.com</p>
            <p>Phone: +1 469-766-6325</p>
            {/* Additional contact info */}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
