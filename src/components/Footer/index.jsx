import React from "react";
// import { homeData } from "../../dummyData"
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="box">
            <div className="footer-links">
              <h3 className="footer-title">Follow Us</h3>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-instagram"></i>
            </div>
            <p>
              © 2022 STREAMIT. All Rights Reserved. All videos and shows on this
              platform are trademarks of, and all related images and content are
              the property of, Streamit Inc. Duplication and copy of this is
              strictly prohibited. All rights reserved.
            </p>
          </div>
          <div className="box">
          <h3 className="footer-title">Links</h3>
            <ul className="flex">
              <li className="footer-link">Terms of Use</li>
              <li className="footer-link">Privacy-Policy</li>
              <li className="footer-link">Blog</li>
              <li className="footer-link">FAQ</li>
              <li className="footer-link">Watch List</li>
            </ul>
          </div>
          {/* <div className="box">
            <h3>Streamit App</h3>
            <div className="img flexSB">
              <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" />
              <span>App Store</span>
              <img src="https://img.icons8.com/fluency/48/000000/google-play.png" />
              <span>Google Play Store</span>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
