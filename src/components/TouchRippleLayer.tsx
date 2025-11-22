import { useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  hue: number;
}

const TouchRippleLayer = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouchDevice) return;

    let rippleId = 0;

    const handleTouchStart = (event: TouchEvent) => {
      const touches = Array.from(event.changedTouches);

      const newRipples = touches.map((touch) => ({
        id: rippleId++,
        x: touch.clientX,
        y: touch.clientY,
        size: 120 + Math.random() * 120,
        hue: 250 + Math.random() * 80,
      }));

      setRipples((prev) => [...prev, ...newRipples]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => !newRipples.some((nr) => nr.id === ripple.id)));
      }, 550);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    return () => window.removeEventListener("touchstart", handleTouchStart);
  }, []);

  if (!ripples.length) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="touch-ripple"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            background: `radial-gradient(circle, hsla(${ripple.hue}, 85%, 65%, 0.35) 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
};

export default TouchRippleLayer;


