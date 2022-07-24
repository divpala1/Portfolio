import React, {useRef} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_website', form.current, 'W_WwEtTuDeQc679bv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div className='contact'>
      <div className="contact-heading">
        <h3 className='contact-h3'>Contact</h3>
      </div>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className='form'>

          <div className="name">
            <label className='label'>Name</label>
            <input type="text" name="name" placeholder="Your cool name" />
          </div>

          <div className="email">
            <label className='label'>E-mail</label>
            <input type="text" name="email" placeholder="Your e-mail" />
          </div>

          <div className='other'>
            <label className='label'>Company</label>
            <input type="text" name="company" placeholder="Company" />

            <label className='label'>Subject</label>
            <input type="text" name="subject" placeholder="Subject" />

            <label className='label'>Message</label>
            <textarea id="subject" name="message" placeholder="E.g. I want to hire you"></textarea>

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact