import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Sagar Gupta. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/sagar-gupta-572b852a4/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/Sagargupta5159"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/sagargupta5159?igsh=eGFjaTZldzY1ODJv"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/share/1Sp7KCGb8C/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook"></i>
        </a>
      
      </div>
    </footer>
  );
}

export default Footer;
