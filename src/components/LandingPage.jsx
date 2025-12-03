import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const CountUp = ({ end, duration = 2, isLoadingComplete }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isLoadingComplete || hasAnimated.current) return;

    hasAnimated.current = true;
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isLoadingComplete]);

  return <span ref={countRef}>{count}</span>;
};

const LandingPage = ({ isLoadingComplete }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing-page">
        <div className="hero-fullscreen">
          <img src="/masteam.png" alt="MAS Team" className="fullscreen-bg-image" />
        </div>
        <div className="hero-container">
          <div className="hero-center">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoadingComplete ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="typewriter-title">MILLION AT STAKE</h1>
              <p className="typewriter-tagline">No dreams. Only execution.</p>
              <a
                href="https://forms.gle/9aLyRAmKmNsg1kwB6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-register-now"
              >
                Register Now
              </a>
              <motion.div 
                className="funding-overlay"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoadingComplete ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="stat-value">
                  $<CountUp end={18.7} duration={2.5} isLoadingComplete={isLoadingComplete} />M
                </div>
                <div className="stat-label">LAST YEAR FUNDING</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
