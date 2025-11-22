import { useEffect, useRef } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      x: number;
      y: number;
      depth: number;
      size: number;
      hue: number;
      speed: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.depth = Math.random() * 1.5 + 0.2;
        this.size = Math.random() * 2 + 0.5;
        this.hue = 260 + Math.random() * 80;
        this.speed = (Math.random() * 0.3 + 0.05) * this.depth;
      }

      update() {
        this.x += this.speed;
        if (this.x > window.innerWidth + 50) {
          this.x = -50;
          this.y = Math.random() * window.innerHeight;
        }
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 12 * this.depth,
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 85%, 65%, 0.65)`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 12 * this.depth, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Ribbon {
      points: { x: number; y: number }[];
      speed: number;
      hue: number;
      amplitude: number;
      offset: number;
      thickness: number;

      constructor() {
        this.points = Array.from({ length: 6 }, (_, idx) => ({
          x: (window.innerWidth / 5) * idx,
          y: window.innerHeight / 2,
        }));
        this.speed = Math.random() * 0.003 + 0.001;
        this.hue = 200 + Math.random() * 140;
        this.amplitude = Math.random() * 80 + 40;
        this.offset = Math.random() * Math.PI * 2;
        this.thickness = Math.random() * 3 + 3;
      }

      update(time: number) {
        this.points = this.points.map((point, idx) => ({
          x: point.x,
          y:
            window.innerHeight / 2 +
            Math.sin(time * this.speed + idx * 0.6 + this.offset) * this.amplitude,
        }));
      }

      draw(time: number) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length - 2; i++) {
          const xc = (this.points[i].x + this.points[i + 1].x) / 2;
          const yc = (this.points[i].y + this.points[i + 1].y) / 2;
          ctx.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
        }
        ctx.quadraticCurveTo(
          this.points[this.points.length - 2].x,
          this.points[this.points.length - 2].y,
          this.points[this.points.length - 1].x,
          this.points[this.points.length - 1].y,
        );

        const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
        gradient.addColorStop(0, `hsla(${this.hue}, 85%, 70%, 0.55)`);
        gradient.addColorStop(1, `hsla(${this.hue + 30}, 85%, 60%, 0.35)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.thickness + Math.sin(time * 0.002 + this.offset) * 1.5;
        ctx.shadowColor = `hsla(${this.hue}, 85%, 55%, 0.2)`;
        ctx.shadowBlur = 25;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
    }

    class Halo {
      x: number;
      y: number;
      radius: number;
      pulse: number;
      hue: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.radius = Math.random() * 120 + 40;
        this.pulse = Math.random() * Math.PI * 2;
        this.hue = 220 + Math.random() * 90;
      }

      update() {
        this.pulse += 0.01;
        if (this.pulse > Math.PI * 2) this.pulse = 0;
      }

      draw(time: number) {
        const scale = 0.85 + Math.sin(time * 0.002 + this.pulse) * 0.2;
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * scale,
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 90%, 65%, 0.45)`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
      }
    }

    class Prism {
      x: number;
      y: number;
      size: number;
      rotation: number;
      spin: number;
      driftY: number;
      hue: number;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 35 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.002;
        this.driftY = (Math.random() - 0.5) * 0.2;
        this.hue = 220 + Math.random() * 90;
      }

      update() {
        this.rotation += this.spin;
        this.y += this.driftY;
        if (this.y > window.innerHeight + 60) this.y = -60;
        if (this.y < -60) this.y = window.innerHeight + 60;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        const gradient = ctx.createLinearGradient(-this.size, 0, this.size, 0);
        gradient.addColorStop(0, `hsla(${this.hue}, 90%, 70%, 0.35)`);
        gradient.addColorStop(1, `hsla(${this.hue + 40}, 90%, 65%, 0.55)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        const sides = 6;
        for (let i = 0; i <= sides; i++) {
          const angle = (i / sides) * Math.PI * 2;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * (this.size * 0.6);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 110 }, () => new Particle());
    const ribbons = Array.from({ length: 3 }, () => new Ribbon());
    const halos = Array.from({ length: 14 }, () => new Halo());
    const prisms = Array.from({ length: 8 }, () => new Prism());

    let frame = 0;
    let animationFrameId: number;
    const animate = () => {
      frame += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
      gradient.addColorStop(0, "rgba(7, 9, 20, 0.85)");
      gradient.addColorStop(1, "rgba(11, 16, 35, 0.65)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      halos.forEach((halo) => {
        halo.update();
        halo.draw(frame);
      });

      ribbons.forEach((ribbon) => {
        ribbon.update(frame);
        ribbon.draw(frame);
      });

      prisms.forEach((prism) => {
        prism.update();
        prism.draw();
      });

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 mesh-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/55 to-background/78 pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;

