import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: ReactNode;
  direction: "left" | "right";
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, direction }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust as needed
  });

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
