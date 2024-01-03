import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Learn more about [Your Gaming PC Company Name] and our commitment to providing top-tier gaming experiences.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: contact@[yourcompany].com</p>
                    <p>Phone: 469-766-6325</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    {/* Icons or links to social media platforms */}
                    <p>[Social Media Icons]</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} [General Sales Co. LLC]. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
