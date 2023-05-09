import { motion } from "framer-motion";

export default ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => (
  <div
    onClick={toggle}
    className="w-5 h-5 pmx-5 flex flex-col justify-between cursor-pointer select-none"
  >
    <motion.div
      className="bg-light-text dark:bg-dark-text rounded-md h-1 w-8"
      animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
    />
    <motion.div
      className="bg-light-text dark:bg-dark-text rounded-md h-1 w-8"
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
    />
    <motion.div
      className="bg-light-text dark:bg-dark-text rounded-md h-1 w-8"
      animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
    />
  </div>
);
