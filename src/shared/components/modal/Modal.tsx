export default function Modal({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-md shadow-md w-full max-w-sm relative">
        {children}
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-2xl text-black hover:text-primary"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
