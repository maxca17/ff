import React from 'react';

function Header({ onContactClick }) {
  return (
    <header className="header">
      <div className="logo">
        FrostFrame Gaming
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><button onClick={onContactClick}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
