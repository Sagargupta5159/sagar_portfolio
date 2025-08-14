import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_p3rlgjr',      // e.g., service_p3rlgjr
      'template_kcftsw2',     // e.g., template_xyz123
      form.current,
      'zdwIO19koBhUEenW-'       // e.g., Zg... from EmailJS dashboard
    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
      form.current.reset(); // Reset form after success
    }, (error) => {
      console.error(error.text);
      alert("Something went wrong. Please try again later.");
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thank you for reaching out! I will get back to you soon.</p>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
