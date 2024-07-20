import React, { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface BlurCardProps {
  children: ReactNode;
}

const BlurCard: React.FC<BlurCardProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`blur-in ${show ? "show" : ""}`}>
      {children}
    </div>
  );
};

export default BlurCard;
