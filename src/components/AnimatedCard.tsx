import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCardProps {
  children: ReactNode;
  direction: "left" | "right";
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, direction }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      className={
        inView
          ? direction === "left"
            ? "slide-in-left"
            : "slide-in-right"
          : ""
      }
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
