import { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const stars = [];
    let animationFrame;
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let focalLength = 0;

    const createStar = () => ({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      z: Math.random() * width,
    });

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      centerX = width / 2;
      centerY = height / 2;
      focalLength = Math.max(width, height) * 0.72;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      stars.length = 0;
      const starCount = Math.min(150, Math.max(90, Math.floor((width * height) / 12000)));
      for (let index = 0; index < starCount; index += 1) stars.push(createStar());
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const star of stars) {
        star.z -= 0.65;
        if (star.z <= 1) Object.assign(star, createStar(), { z: width });
        const scale = focalLength / star.z;
        const x = centerX + star.x * scale;
        const y = centerY + star.y * scale;
        if (x < 0 || x > width || y < 0 || y > height) continue;
        const previousScale = focalLength / (star.z + 4);
        const previousX = centerX + star.x * previousScale;
        const previousY = centerY + star.y * previousScale;
        const size = Math.max(0.45, (1 - star.z / width) * 2.1);
        const opacity = Math.min(0.85, 0.25 + (1 - star.z / width) * 0.65);
        context.strokeStyle = `rgba(214, 246, 220, ${opacity * 0.28})`;
        context.lineWidth = Math.max(0.35, size * 0.55);
        context.beginPath();
        context.moveTo(previousX, previousY);
        context.lineTo(x, y);
        context.stroke();
        context.fillStyle = `rgba(196, 232, 204, ${opacity})`;
        context.beginPath();
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fill();
      }
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
};

export default Starfield;
