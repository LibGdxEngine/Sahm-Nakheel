import { motion } from "framer-motion";
import { AnimatedLogo } from "./Icons";

const TransitionEffect = () => {
  return (
    <div className="transition-screen">
      <motion.div
        className="circle"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <AnimatedLogo isOpen={true} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TransitionEffect;
