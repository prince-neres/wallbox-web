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
    className="my-8 w-5 h-5 mx-7 flex flex-col justify-between cursor-pointer"
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
