// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>TodayNews</h5>
            <p>Your go-to source for the latest and most reliable news.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" target='_blank' rel="noreferrer" className="text-white">Facebook</a></li>
              <li><a href="https://twitter.com" target='_blank' rel="noreferrer" className="text-white">Twitter</a></li>
              <li><a href="https://instagram.com" target='_blank' rel="noreferrer" className="text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p>&copy; 2024 TodayNews. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
