import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                FrostFrame Gaming
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
