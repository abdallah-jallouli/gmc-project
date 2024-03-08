import React from "react";
import logo from '../../../images/logo.png'
import facebook from '../../../images/facebook.svg'
import twitter from '../../../images/twitter.svg'
import instgram from '../../../images/insta.svg'

import './footer.css'

const Footer = () => {
  return (
    <footer id="about" class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand">
            <a href="#" class="logo">
              <img
                src={logo}
                width="190"
                height="28"
                alt="weanlthome"
              />
            </a>

            <p class="body-meduim footer-text">
              Lorem ipsum dolor sit amet consectetur. Non bibendum sit non
              congue pharetra pulvinar leo. Sed ut amet ipsum.
            </p>
          </div>

          <nav class="footer-nav" aria-labelledby="nav-label-1">
            <p class="titel-small footer-list-title" id="nav-label-1">
              Quick link
            </p>

            <ul class="footer-list">
              <li>
                <a href="#home" class="body-meduim footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#buy" class="body-meduim footer-link">
                  Buy
                </a>
              </li>
              <li>
                <a href="#sell" class="body-meduim footer-link">
                  Sell
                </a>
              </li>
              <li>
                <a href="#rent" class="body-meduim footer-link">
                  Rent
                </a>
              </li>
            </ul>
          </nav>

          <nav class="footer-nav" aria-labelledby="nav-label-2">
            <p class="titel-small footer-list-title" id="nav-label-2">
              Support
            </p>

            <ul class="footer-list">
              <li>
                <a href="" class="body-meduim footer-link">
                  About us
                </a>
              </li>
              <li>
                <a href="" class="body-meduim footer-link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="" class="body-meduim footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" class="body-meduim footer-link">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </nav>

          <nav class="footer-nav" aria-labelledby="nav-label-3">
            <p class="titel-small footer-list-title" id="nav-label-3">
              Get in touch
            </p>

            <ul class="footer-list">
              <li>
                <a href="#" class="body-meduim footer-link">
                  hello@wealthome.com
                </a>
              </li>

              <li>
                <address class="address body-medium">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </address>
              </li>

              <ul class="social-link">
                <li>
                  <a href="#" class="social-link">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" class="social-link">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" class="social-link">
                    <img src={instgram} alt="instgram" />
                  </a>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright body-medium">Copyright 2023 Abdallah-Jallouli</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
