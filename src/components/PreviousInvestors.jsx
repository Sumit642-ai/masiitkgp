import React, { useEffect, useRef } from 'react';
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

const investorGroups = [
  { folder: '2025', list: investors2025 },
  { folder: '2024', list: investors2024 },
  { folder: '2023', list: investors2023 },
];

const investors = investorGroups
  .flatMap(({ folder, list }) =>
    list.map(({ file, designation, company }) => ({
      name: makeName(file),
      image: `/${folder}/${file}`,
      designation,
      company,
    }))
  )
  .reduce((unique, investor) => {
    if (!unique.some(({ name }) => name === investor.name)) {
      unique.push(investor);
    }
    return unique;
  }, []);

const PreviousInvestors = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) {
      return undefined;
    }

    const mq = window.matchMedia('(max-width: 768px)');
    let intervalId = null;
    let scrollAmount = 0;
    let cardNodes = [];

    const stopAutoScroll = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const updateCardMetrics = () => {
      cardNodes = container.querySelectorAll('.investor-card');
      if (!cardNodes.length) {
        return false;
      }

      const styles = window.getComputedStyle(container);
      const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
      scrollAmount = cardNodes[0].offsetWidth + gap;
      return scrollAmount > 0;
    };

    const startAutoScroll = (snapToStart = false) => {
      stopAutoScroll();

      if (!updateCardMetrics()) {
        return;
      }

      intervalId = window.setInterval(() => {
        if (!cardNodes.length || scrollAmount <= 0) {
          return;
        }

        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentScroll = container.scrollLeft;

        // If we've reached the end, loop back to start
        if (currentScroll >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: 'smooth',
          });
        }
      }, 3000);

      if (snapToStart) {
        container.scrollTo({ left: 0, behavior: 'auto' });
      }
    };

    const handleResize = () => {
      if (mq.matches) {
        if (updateCardMetrics() && scrollAmount > 0) {
          const nearestIndex = Math.round(container.scrollLeft / scrollAmount);
          container.scrollLeft = nearestIndex * scrollAmount;
        }
      }
    };

    const handleChange = (e) => {
      if (e.matches) {
        startAutoScroll(true);
      } else {
        stopAutoScroll();
      }
    };

    // Only start auto-scroll on mobile
    if (mq.matches) {
      startAutoScroll(true);
    }

    mq.addEventListener('change', handleChange);
    window.addEventListener('resize', handleResize);

    const handlePointerDown = () => stopAutoScroll();
    const handlePointerUp = () => {
      if (mq.matches && !intervalId) {
        // Restart auto-scroll after 2 seconds of no interaction
        setTimeout(() => {
          if (!intervalId && mq.matches) {
            startAutoScroll();
          }
        }, 2000);
      }
    };

    container.addEventListener('pointerdown', handlePointerDown, { passive: true });
    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    container.addEventListener('pointerup', handlePointerUp, { passive: true });
    container.addEventListener('touchend', handlePointerUp, { passive: true });
    container.addEventListener('pointercancel', handlePointerUp, { passive: true });
    container.addEventListener('touchcancel', handlePointerUp, { passive: true });

    return () => {
      stopAutoScroll();
      mq.removeEventListener('change', handleChange);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('touchstart', handlePointerDown);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('touchend', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);
      container.removeEventListener('touchcancel', handlePointerUp);
    };
  }, []);

  return (
    <div className="previous-investors">
      <h2>Previous Investors</h2>
      <div ref={carouselRef} className="investors-grid">
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
