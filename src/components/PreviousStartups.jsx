import React from 'react';
import './PreviousStartups.css';

const startups = [
  {
    name: 'SAM-AI',
    description: 'SAM-AI has received a commitment of INR 15 Lakhs',
    image: '/startup/SAM-AI.png',
  },
  {
    name: 'Sitemaster',
    description: 'Sitemaster has received a commitment of INR 37 Lakhs',
    image: '/startup/Sitemaster.jpeg',
  },
  {
    name: 'Tharam-Thiram Green Energy Pvt. Ltd.',
    description: 'Tharam-Thiram Green Energy Pvt. Ltd. has received a commitment of INR 45 Lakhs',
    image: '/startup/Tharam-Thiram Green Energy Pvt. Ltd..png',
  },
  {
    name: 'Navigo Techlabs Pvt. Ltd.',
    description: 'Navigo Techlabs Pvt. Ltd. has received a commitment of INR 55 Lakhs',
    image: '/startup/Navigo Techlabs Pvt. Ltd..png',
  },
  {
    name: 'Dhwani-AI',
    description: 'Dhwani AI has received a commitment of INR 35 Lakhs',
    image: '/startup/Dhwani-AI.png',
  },
  {
    name: 'Evoride Motors Pvt. Ltd.',
    description: 'Evoride Motors Pvt. Ltd. has received a commitment of INR 40 Lakhs',
    image: '/startup/Evoride Motors Pvt. Ltd..png',
  },
  {
    name: 'Schooglink Pvt. Ltd.',
    description: 'Schooglink Pvt. Ltd. has received a commitment of INR 40 Lakhs',
    image: '/startup/Schooglink Pvt. Ltd..png',
  },
  {
    name: 'Waterdrop - Water Delivery App',
    description: 'Waterdrop - Water Delivery App has received a commitment of INR 30 Lakhs',
    image: '/startup/Waterdrop.png',
  },
];

const PreviousStartups = () => {
  return (
    <div className="previous-startups">
      <h2>Hall of Fame</h2>
      <p>A showcase of successful startups from previous years.</p>
      <div className="startups-grid">
        {startups.map((startup, index) => (
          <div key={index} className="startup-card">
            <div className="startup-image-container">
              <img src={startup.image} alt={startup.name} />
              <div className="startup-overlay">
                <h3>{startup.name}</h3>
                <p className="fund-raised">{startup.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousStartups;
