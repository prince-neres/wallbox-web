import { XMarkIcon } from "@heroicons/react/20/solid";

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
          className="fixed inset-0 bg-black bg-opacity-80 transition-opacity"
          onClick={onCancel}
        ></div>
        <div className="overflow-hidden shadow-xl transform transition-all sm:w-full md:w-1/2 lg:w-1/3">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h3 className=" text-white">{title}</h3>
              <XMarkIcon
                className="w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-500"
                onClick={onCancel}
              />
            </div>
            <div className="flex gap-3 mt-5 sm:mt-6">
              <button
                type="button"
                className="font-bold inline-flex justify-center w-full rounded border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                onClick={onCancel}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="font-bold inline-flex justify-center w-full rounded border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                onClick={onConfirm}
              >
                Deletar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
