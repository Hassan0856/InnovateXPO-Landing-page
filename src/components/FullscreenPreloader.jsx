// src/components/FullscreenPreloader.jsx
import React, { useEffect, useRef, useState, memo } from 'react';
import './FullscreenPreloader.css';

const FullscreenPreloader = memo(function FullscreenPreloader({
  src = '/SUKHF_logo.png',   // change to your logo path
  durationMs = 2800,
  onDone,
}) {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'fading'
  const rafRef = useRef(null);
  const fadeTimeoutRef = useRef(null);

  useEffect(() => {
    const start = performance.now();

    const tick = (t) => {
      const p = Math.min((t - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.round(eased * 100));

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase('fading');
        fadeTimeoutRef.current = window.setTimeout(() => {
          onDone();
        }, 600); // match fade transition
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (fadeTimeoutRef.current !== null) clearTimeout(fadeTimeoutRef.current);
    };
  }, [durationMs, onDone]);

  return (
    <div
      className="fp-preloader"
      style={{
        opacity: phase === 'fading' ? 0 : 1,
        transition: 'opacity 600ms ease-out',
      }}
    >
      <div className="fp-logo-wrapper">
        <img
          src={src}
          alt="Logo"
          className="fp-logo-img"
        />
      </div>

      <div className="fp-progress-container">
        <div className="fp-progress-bar-bg">
          <div
            className="fp-progress-bar-fill"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="fp-progress-text">
          {pct}%
        </div>
      </div>
    </div>
  );
});

export default FullscreenPreloader;
