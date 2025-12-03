import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds loading time
    const interval = 50; // Update every 50ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 500); // Wait for fade out animation
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img src="/public/MASlogo.png" alt="MAS Logo" className="loading-logo-img" />
        </div>
        
       
        
        <div className="loading-tagline">
          <span className="typewriter">No dreams. Only execution.</span>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar">
            <div 
              className="loading-bar-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="loading-percentage">{Math.floor(progress)}%</div>
        </div>

        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
