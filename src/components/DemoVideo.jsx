import React, { useState, useRef } from 'react';

const VIDEO_URL =
  'https://res.cloudinary.com/dt6p10djv/video/upload/v1783852437/OnlineSCADA_DEMO_VIDEO_oltn8w.mp4';

const DemoVideo = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    // Let the browser paint the video element first, then play
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  return (
    <div className="demo-video-section">
      <p className="demo-video-label">See it in action</p>

      <div className="demo-video-wrapper">
        {/* ── Native video player ── */}
        <video
          ref={videoRef}
          className={`demo-video-player${playing ? ' demo-video-player--visible' : ''}`}
          src={VIDEO_URL}
          poster="https://res.cloudinary.com/dt6p10djv/video/upload/so_0,w_780,q_auto,f_jpg/v1783852437/OnlineSCADA_DEMO_VIDEO_oltn8w.jpg"
          controls
          playsInline
          preload="metadata"
          aria-label="OnlineSCADA demo video"
        />

        {/* ── Thumbnail overlay (hidden once playing) ── */}
        {!playing && (
          <div
            className="demo-video-thumbnail"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dt6p10djv/video/upload/so_0,w_780,q_auto,f_jpg/v1783852437/OnlineSCADA_DEMO_VIDEO_oltn8w.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={handlePlay}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handlePlay()}
            aria-label="Play demo video"
          >
            {/* Dark fallback background */}
            <div className="demo-video-overlay" />

            {/* Centered play button + label */}
            <div className="demo-play-center">
              <div className="demo-play-ring">
                <button
                  className="demo-play-btn"
                  aria-label="Play demo video"
                  tabIndex={-1}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="demo-play-icon"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <span className="demo-play-label">▶ &nbsp;Watch Demo</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoVideo;
