import React from "react";

const ContactInformation = () =>
  <section>
    <ul className="contact">
      {/* <li>
        <h3>Address</h3>
        <span>
          12345 Somewhere Road #654
          <br />
          Nashville, TN 00000-0000
          <br />
          USA
        </span>
      </li> */}
      {/* <li>
        <h3>Email</h3>
        <a href="/#">user@untitled.tld</a>
      </li>
      <li>
        <h3>Phone</h3>
        <span>(000) 000-0000</span>
      </li> */}
      <li>
        <h3>GitHub</h3>
        <ul className="icons">
          {/* <li>
            <a href="/#" className="fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li> */}
          <li>
            <a href="https://github.com/code-quality-metrics" className="fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          {/* <li>
            <a href="/#" className="fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="/#" className="fa-linkedin">
              <span className="label">LinkedIn</span>
            </a>
          </li> */}
        </ul>
      </li>
    </ul>
  </section>

export default ContactInformation;
