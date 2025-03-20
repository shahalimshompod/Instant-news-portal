import { useState } from 'react';

const ReasonOfRejectionModal = ({rejectionReasonData, setRejectionReasonData}) => {
  const [isOpen, setIsOpen] = useState(true);

  if (rejectionReasonData === '') return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={() => setRejectionReasonData('')}
          className="absolute top-4 right-4 hover:bg-gray-100 rounded-full p-1 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-4 font-sora">Reason of Rejection</h2>
        <p className="text-gray-600 font-sora">{rejectionReasonData || "N/A"}</p>
      </div>
    </div>
  );
};

export default ReasonOfRejectionModal;