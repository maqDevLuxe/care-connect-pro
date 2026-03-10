/* ===== Animated Section ===== 
   AOS-style scroll-triggered animation wrapper using framer-motion.
*/

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: Props) => {
  const initial = direction === "up" 
    ? { opacity: 0, y: 40 } 
    : direction === "left" 
    ? { opacity: 0, x: -40 } 
    : { opacity: 0, x: 40 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
