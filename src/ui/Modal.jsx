import React from "react";
import Button from "./Button";
import {HiOutlineX } from "react-icons/hi"

const Modal = ({ children, onClose, isOpen, title }) => {
  return (
   isOpen && <div
      className="backdrop-blur-sm fixed top-0 left-0 
    w-full h-screen bg-secondary-800 bg-opacity-30"
    >
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          rounded-sm bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out w-64"
      >
        <div className="flex items-center justify-between border-b pb-2 mb-6">
          <p className="text-secondary-700 font-bold text-base">{title}</p>
          <Button onClick={onClose} title={<HiOutlineX />} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
