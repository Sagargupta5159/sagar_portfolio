import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="logo">Sagar </div>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
     <a
  href="/resume.pdf"
  onClick={(e) => {
    e.preventDefault();
    const pdfUrl = "/resume.pdf";
    window.open(pdfUrl, '_blank'); // Open in new tab
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Resume
</a>

      </div>
    </nav>
  );
}

export default Navbar;
