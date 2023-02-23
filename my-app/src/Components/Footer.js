import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <h4>Doormat Navigation</h4>
            <ul className="list">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="col">
            <h4>Contact</h4>
            <ul className="list">
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="col">
            <h4>Social Media</h4>
            <ul className="list">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sml">
            &copy;{new Date().getFullYear()} Little Lemon | All rights reserved
            | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
