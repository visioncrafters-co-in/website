import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     "ontouchstart" in window;
    if (isMobile) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    let rafId: number;
    const updateCursor = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Check if hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", updateCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-300 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-primary transition-all duration-300 ${
            isHovering ? "scale-150 bg-accent" : "scale-100"
          }`}
          style={{
            boxShadow: isHovering
              ? "0 0 20px rgba(236, 72, 153, 0.6), 0 0 40px rgba(236, 72, 153, 0.4)"
              : "0 0 10px rgba(139, 92, 246, 0.5)",
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full border-2 border-primary/30 transition-all duration-500 ${
            isHovering ? "w-12 h-12 border-accent/50" : "w-8 h-8"
          }`}
        />
      </div>

      {/* Trailing particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="fixed pointer-events-none z-[9997] transition-all duration-700 ease-out hidden md:block"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            transitionDelay: `${i * 100}ms`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full bg-secondary/40"
            style={{
              transform: `translate(${(i - 1) * 8}px, ${(i - 1) * 8}px)`,
            }}
          />
        </div>
      ))}

      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-[9996] transition-opacity duration-300 hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: isHovering ? 0.3 : 0.1,
        }}
      >
        <div
          className="w-32 h-32 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-2xl"
          style={{
            filter: "blur(40px)",
          }}
        />
      </div>
    </>
  );
};

export default CursorFollower;

