import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const contacts = [
    {
      name: 'Sumit Vijay Raut',
      designation: 'Associate Manager',
      email: 'raut.sumit@ecell-iitkgp.in',
      phone: '+91 9607330015',
      image: '/photo1.png',
    },
    {
      name: 'Ehina Gupta Sarma',
      designation: 'Associate Manager',
      email: 'sarma.ehina@ecell-iitkgp.in',
      phone: '+91 891 035 7482',
      image: '/photo2.JPG',
    },
  ];

  return (
    <div className="contact-us-container">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-cards">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <div className="contact-card-image">
              <img src={contact.image} alt={contact.name} />
            </div>
            <div className="contact-card-info">
              <h3>{contact.name}</h3>
              <p className="designation">{contact.designation}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
