import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const Step1 = ({ nextStep, handleChange, values }) => {
  const onNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="form-grid" onSubmit={onNext}>
      <div className="field full-width">
        <label>Email *</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>Name of the Startup *</label>
        <input type="text" name="startupName" value={values.startupName} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>Category *</label>
        <select name="category" value={values.category} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="Health Tech & Wellness">Health Tech & Wellness</option>
          <option value="Media, Gaming & Social">Media, Gaming & Social</option>
          <option value="Agri Tech, Bio Tech & Energy">Agri Tech, Bio Tech & Energy</option>
          <option value="Commerce & Retail">Commerce & Retail</option>
          <option value="Fin Tech">Fin Tech</option>
          <option value="SaaS, Deep Tech & IoT">SaaS, Deep Tech & IoT</option>
          <option value="Edu Tech">Edu Tech</option>
          <option value="Web3.0 & Cryptocurrency">Web3.0 & Cryptocurrency</option>
          <option value="B2B">B2B</option>
          <option value="Robotics">Robotics</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="field">
        <label>Founding Year *</label>
        <input type="number" name="foundingYear" value={values.foundingYear} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>Competitor Startups</label>
        <input type="text" name="competitors" value={values.competitors} onChange={handleChange} />
      </div>
      <div className="field full-width">
        <label>Startup Summary *</label>
        <textarea name="startupSummary" value={values.startupSummary} onChange={handleChange} required placeholder="Let us know in brief what your startup is about, etc."></textarea>
      </div>
      <div className="wizard-actions full-width">
        <button type="submit" className="btn-next">Next</button>
      </div>
    </form>
  );
};

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const onNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="form-grid" onSubmit={onNext}>
      <div className="field">
        <label>Previous Funding *</label>
        <input type="text" name="previousFunding" value={values.previousFunding} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>Startup Website</label>
        <input type="url" name="website" value={values.website} onChange={handleChange} />
      </div>
      <div className="field">
        <label>Location *</label>
        <input type="text" name="location" value={values.location} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>Founder Name *</label>
        <input type="text" name="founderName" value={values.founderName} onChange={handleChange} required />
      </div>
      <div className="field full-width">
        <label>Upload Pitch Deck * <span className="hint">(Max 10 MB. PDF, PPT, PPTX)</span></label>
        <input type="file" name="pitchDeck" onChange={handleChange} accept=".pdf,.ppt,.pptx" required={!values.pitchDeck} />
      </div>
      <div className="field full-width">
        <label>Co-founders' Details</label>
        <textarea name="cofounders" value={values.cofounders} onChange={handleChange} placeholder="1) Name 2) email address 3) contact number 4) LinkedIn URL"></textarea>
      </div>
      <div className="wizard-actions full-width">
        <button type="button" onClick={prevStep} className="btn-back">Back</button>
        <button type="submit" className="btn-next">Next</button>
      </div>
    </form>
  );
};

const Step3 = ({ prevStep, handleSubmit, handleChange, values, isSubmitting, isSubmitted }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <div className="field">
        <label>Founder Email *</label>
        <input type="email" name="founderEmail" value={values.founderEmail} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>Founder Contact *</label>
        <input type="tel" name="founderContact" value={values.founderContact} onChange={handleChange} required />
      </div>
      <div className="field">
        <label>WhatsApp Number</label>
        <input type="tel" name="founderWhatsapp" value={values.founderWhatsapp} onChange={handleChange} />
      </div>
      <div className="field">
        <label>LinkedIn URL</label>
        <input type="url" name="founderLinkedin" value={values.founderLinkedin} onChange={handleChange} />
      </div>
      <div className="field full-width">
        <label>Unique Story / Special Details</label>
        <textarea name="founderStory" value={values.founderStory} onChange={handleChange} placeholder="We'd love to know why you're building this product/company now..."></textarea>
      </div>
      <div className="field full-width">
        <label>Founder Bio</label>
        <textarea name="founderBio" value={values.founderBio} onChange={handleChange}></textarea>
      </div>
      <div className="wizard-actions full-width">
        <button type="button" onClick={prevStep} className="btn-back">Back</button>
        <button
          type="submit"
          className="btn-submit"
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitted ? 'Submitted' : isSubmitting ? 'Submitting...' : 'Submit Registration'}
        </button>
      </div>
    </form>
  );
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    startupName: '',
    category: '',
    foundingYear: '',
    startupSummary: '',
    competitors: '',
    previousFunding: '',
    website: '',
    pitchDeck: null,
    location: '',
    founderName: '',
    cofounders: '',
    founderStory: '',
    founderEmail: '',
    founderContact: '',
    founderWhatsapp: '',
    founderLinkedin: '',
    founderBio: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = async () => {
    if (isSubmitting || isSubmitted) return;

    setIsSubmitting(true);

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbyczfHKYjoDLF1l9ZiDqHxS8BTrH2GbsOsHiJAsP5kpTAd31W7ETdi5wfNN3UiTezn6/exec';

    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
      });
    };

    let pitchDeckData = null;
    if (formData.pitchDeck) {
      try {
        const base64 = await getBase64(formData.pitchDeck);
        pitchDeckData = {
          name: formData.pitchDeck.name,
          mimeType: formData.pitchDeck.type,
          base64: base64,
        };
      } catch (e) {
        console.error('File error', e);
        alert('Error processing file');
        return;
      }
    }

    const payload = {
      ...formData,
      pitchDeck: pitchDeckData,
    };

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      setIsSubmitted(true);
      try {
        localStorage.setItem('mas_registered', 'true');
      } catch (e) {
        console.error('Could not persist registration flag', e);
      }
      navigate('/');
    } catch (error) {
      console.error('Error!', error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-left">
        <div className="registration-container">
          <button className="back-button" onClick={() => navigate('/')}>&larr; Back to Home</button>
          
          <h2 className="form-title">Startup Registration</h2>
          
          <div className="steps-indicator">
            <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Basic Info</div>
            </div>
            <div className={`step-connector ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Details</div>
            </div>
            <div className={`step-connector ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">Founder Info</div>
            </div>
          </div>

          <div className="form-content">
            {step === 1 && <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />}
            {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />}
            {step === 3 && (
              <>
                <Step3
                  prevStep={prevStep}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  values={formData}
                  isSubmitting={isSubmitting}
                  isSubmitted={isSubmitted}
                />
                {isSubmitting && !isSubmitted && (
                  <p className="submission-status">Submitting your registration, please wait...</p>
                )}
                {isSubmitted && (
                  <p className="submission-success">You have successfully submitted your registration. Please check your email.</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="registration-right">
        <div className="image-container">
          <img src="/masteam.png" alt="Million at Stake" />
          <div className="image-overlay">
            <h3>Million at Stake</h3>
            <p>No dreams. Only execution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
