import React, { useEffect, useRef } from "react";

const FakeCursor = () => {
  const cursorRef = useRef(null);
  const mousePos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const cursorPos = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const drift = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleScroll = () => {
      // Add a small drift downward each scroll
      drift.current += 20; // adjust this for stronger drift
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      // Smoothly move cursorPos toward mousePos plus drift
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.1; // easing factor
      cursorPos.current.y +=
        (mousePos.current.y + drift.current - cursorPos.current.y) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      // Slowly decay the drift back toward 0 for natural effect
      drift.current *= 0.95;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        backgroundColor: "#ff4d4f",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default FakeCursor;
