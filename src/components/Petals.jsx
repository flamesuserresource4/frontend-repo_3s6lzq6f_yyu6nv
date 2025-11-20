import React, { useEffect, useRef } from 'react';

// Simple canvas-based falling petals animation
const Petals = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const petalsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = [
      'rgba(255, 182, 193, 0.9)', // LightPink
      'rgba(255, 192, 203, 0.85)', // Pink
      'rgba(255, 228, 225, 0.8)', // MistyRose
      'rgba(250, 214, 214, 0.85)', // Soft Rose
    ];

    const createPetal = () => {
      const size = Math.random() * 10 + 6;
      return {
        x: Math.random() * width,
        y: -20 - Math.random() * height,
        z: Math.random() * 1 + 0.4, // depth factor
        size,
        speedY: Math.random() * 0.7 + 0.4,
        speedX: Math.random() * 0.6 - 0.3,
        rot: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        color: colors[(Math.random() * colors.length) | 0],
      };
    };

    const init = () => {
      petalsRef.current = new Array(90).fill(0).map(createPetal);
    };

    const drawPetal = (p) => {
      const s = p.size * p.z;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      const grd = ctx.createRadialGradient(0, 0, 0, 0, 0, s);
      grd.addColorStop(0, p.color);
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.8, s * 0.5, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of petalsRef.current) {
        p.y += p.speedY * (0.5 + p.z);
        p.x += p.speedX * (0.5 + p.z * 0.5);
        p.rot += p.rotSpeed;

        if (p.y - p.size > height + 40) {
          // recycle to top
          p.x = Math.random() * width;
          p.y = -20 - Math.random() * height;
        }

        drawPetal(p);
      }
      rafRef.current = requestAnimationFrame(step);
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    init();
    step();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
};

export default Petals;
