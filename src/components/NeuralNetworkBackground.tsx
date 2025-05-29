import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

interface NeuralNetworkBackgroundProps {
  className?: string;
  pointColor?: string;
  connectionColor?: string;
  pointSize?: number;
  connectionWidth?: number;
  pointCountMultiplier?: number;
  speed?: number;
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({
  className = '',
  pointColor = 'rgba(61, 90, 254, 0.8)',
  connectionColor = 'rgba(61, 90, 254, 0.2)',
  pointSize = 2,
  connectionWidth = 1.5,
  pointCountMultiplier = 12000,
  speed = 0.2
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        initializePoints();
      }
    };

    const initializePoints = () => {
      if (!canvas) return;

      const points: Point[] = [];
      const numPoints = Math.floor((canvas.width * canvas.height) / pointCountMultiplier);

      for (let i = 0; i < numPoints; i++) {
        const angle = Math.random() * Math.PI * 2;
        points.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          connections: []
        });
      }

      points.forEach((point, i) => {
        for (let j = 0; j < points.length; j++) {
          if (i !== j) {
            point.connections.push(j);
          }
        }
      });

      pointsRef.current = points;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = connectionColor;
      ctx.lineWidth = connectionWidth;

      pointsRef.current.forEach((point1, i) => {
        point1.connections.forEach(targetIndex => {
          if (i < targetIndex) {
            const point2 = pointsRef.current[targetIndex];
            const dx = point1.x - point2.x;
            const dy = point1.y - point2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const opacity = Math.max(0, 1 - distance / 300);
            if (opacity > 0) {
              ctx.globalAlpha = opacity * 0.15;
              ctx.beginPath();
              ctx.moveTo(point1.x, point1.y);
              ctx.lineTo(point2.x, point2.y);
              ctx.stroke();
            }
          }
        });
      });

      ctx.globalAlpha = 1;

      pointsRef.current.forEach(point => {
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        ctx.beginPath();
        ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = pointColor;
        ctx.fill();

        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, pointSize * 2
        );
        gradient.addColorStop(0, pointColor.replace('0.8', '0.4'));
        gradient.addColorStop(1, 'rgba(61, 90, 254, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [pointColor, connectionColor, pointSize, connectionWidth, pointCountMultiplier, speed]);

  return (
    <div className={`relative overflow-hidden opacity-0 animate-fadeIn ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(233, 236, 239, 0.8) 100%)'
        }}
      />
      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default NeuralNetworkBackground;
