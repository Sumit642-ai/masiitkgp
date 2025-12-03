import React, { useState, useEffect } from 'react';
import './EventsHighlight.css';

const eventStories = [
  {
    name: 'Pitch Day Energy',
    story:
      'Founders stepping into the spotlight, sharing products that began as sketches and late-night ideas. These are the moments when grit meets opportunity and visions turn into funded realities.',
    images: [
      '/events highlights/1.jpeg',
      '/events highlights/2.jpeg',
      '/events highlights/3.jpeg',
      '/events highlights/4.jpeg'
    ],
    position: 'left'
  },
  {
    name: 'Hall of Fame Moments',
    story:
      'Conversations that started at MAS and turned into pilots, term sheets, and long-term partnerships. A glimpse of the startups that trusted the stage and wrote their next chapter here.',
    images: [
      '/events highlights/5.jpeg',
      '/events highlights/6.jpeg',
      '/events highlights/7.jpeg',
      '/events highlights/8.jpeg'
    ],
    position: 'right'
  }
];

const StorySection = ({ story, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % story.images.length
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [story.images.length]);

  return (
    <div className={`story-section ${story.position}`}>
      <div className="story-content">
        <div className="story-number">Chapter {index + 1}</div>
        <h3>{story.name}</h3>
        <p>{story.story}</p>
      </div>
      <div className="story-slideshow">
        <div className="slideshow-wrapper">
          {story.images.map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={image}
              alt={`${story.name} ${imgIndex + 1}`}
              className={`story-image ${imgIndex === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="slideshow-dots">
          {story.images.map((_, imgIndex) => (
            <span 
              key={imgIndex} 
              className={`dot ${imgIndex === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const EventsHighlight = () => {
  return (
    <div className="events-highlight">
      <h2>Event Highlights</h2>
      <p className="event-subtitle">
        Every great journey has its moments of glory.<br />
        Here's ours, unfolding one story at a time.
      </p>
      <div className="story-container">
        {eventStories.map((story, index) => (
          <StorySection key={index} story={story} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EventsHighlight;
