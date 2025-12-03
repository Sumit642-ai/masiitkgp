import React from 'react';
import './PreviousInvestors.css';

// Helper to derive display name from filename
const makeName = (file) => file.replace(/\.png$/i, '').trim();

// 2025 investors with roles
const investors2025 = [
  {
    file: 'Abhishek Kakkar.png',
    designation: 'Indian Angel Investor',
    company: '',
  },
  {
    file: 'Aman Mankani.png',
    designation: 'Pedalstart Ventures',
    company: '',
  },
  {
    file: 'Gaurav Shah.png',
    designation: 'Managing Partner',
    company: 'Arete Ventures',
  },
  {
    file: 'Mandeep Mehta.png',
    designation: 'Angel Investor',
    company: '',
  },
  {
    file: 'PERIASAMY PRADEEP.png',
    designation: 'Angel Investor',
    company: '',
  },
  {
    file: 'Rajat Srivastava .png',
    designation: 'Senior Associate',
    company: 'IVYCAP',
  },
  {
    file: 'Rathnakar Samavedam.png',
    designation: 'Investment Director',
    company: 'Hyderabad Angels',
  },
  {
    file: 'Vishwajeet Deshmukh.png',
    designation: 'Seed Investor',
    company: 'CUSMAT',
  },
];

const investors2024 = [
  {
    file: 'Abdul Paravengal.png',
    designation: 'Managing Director',
    company: 'Pulse 63 Venture',
  },
  {
    file: 'Tej Kapoor.png',
    designation: 'Managing Partner',
    company: 'IvyCap Venture',
  },
  {
    file: 'Ankur Shah.png',
    designation: 'Vice President',
    company: 'Patni Financial Services',
  },
];

const investors2023 = [
  {
    file: 'Vikrant Varshney.png',
    designation: 'Managing Partner',
    company: 'SucSEED Innovation Fund',
  },
  {
    file: 'Rajnish Kapur.png',
    designation: 'Managing Partner',
    company: 'India Angel Network',
  },
  {
    file: 'Srish Ageawal.png',
    designation: 'Angel Investor',
    company: 'Seeders.in',
  },
  {
    file: 'Gaurav Shah.png',
    designation: 'Managing Partner',
    company: 'Arete Ventures',
  },
];

const investors = [
  ...investors2025.map(({ file, designation, company }) => ({
    name: makeName(file),
    image: `/2025/${file}`,
    designation,
    company,
  })),
  ...investors2024.map(({ file, designation, company }) => ({
    name: makeName(file),
    image: `/2024/${file}`,
    designation,
    company,
  })),
  ...investors2023.map(({ file, designation, company }) => ({
    name: makeName(file),
    image: `/2023/${file}`,
    designation,
    company,
  })),
];

const PreviousInvestors = () => {
  return (
    <div className="previous-investors">
      <h2>Previous Investors</h2>
      <div className="investors-grid">
        {investors.map((investor, index) => (
          <div key={index} className="investor-card">
            <div className="investor-image-container">
              <img src={investor.image} alt={investor.name} />
              <div className="investor-overlay">
                <p className="investor-company">{investor.name}</p>
                {investor.designation && (
                  <p className="investor-designation">
                    {investor.designation}
                    {investor.company && `  ${investor.company}`}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousInvestors;
