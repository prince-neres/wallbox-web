import { XMarkIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

type ModalDeletionProps = {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ModalDeletion({
  title,
  onCancel,
  onConfirm,
}: ModalDeletionProps) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md transition-opacity"
          onClick={onCancel}
        ></div>
        <div className="rounded text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg overflow-hidden shadow-xl transform transition-all sm:w-full md:w-1/2 lg:w-1/3">
          <motion.div
            className="p-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="flex items-center justify-between">
              <h3>{title}</h3>
              <XMarkIcon
                className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-500 duration-100"
                onClick={onCancel}
              />
            </div>
            <motion.div className="flex gap-3 mt-5 sm:mt-6">
              <button
                type="button"
                className="font-bold justify-center w-full rounded p-3 bg-green-600 text-white hover:bg-green-500"
                onClick={onCancel}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="font-bold justify-center w-full rounded p-3 bg-red-600 text-white hover:bg-red-500"
                onClick={onConfirm}
              >
                Deletar
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
