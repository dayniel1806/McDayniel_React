import React, { useEffect, useState } from "react";
import "./fadeInUp.css";

const FadeInUp = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when mounted
    setIsVisible(true);
  }, []);

  return (
    <div className={isVisible ? "fade-in-up" : ""}>
      {children}
    </div>
  );
};

export default FadeInUp;
