// src/components/ConfirmDeleteModal.js
import React from "react";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times; {/* Cross icon for closing the modal */}
        </button>
        <div className="flex justify-center mb-4">
          <span className="text-red-500 text-4xl">⚠️ Delete</span>
        </div>
        
        <p className="text-center">
          Are you sure you want to delete <strong>{itemName}</strong>?
        </p>
        <div className="flex justify-between mt-6">
          <button 
            className="bg-gray-300 text-black px-4 py-2 rounded-3xl mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-[#662671] text-white px-4 py-2 rounded-3xl"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
