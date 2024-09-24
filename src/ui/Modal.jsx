import React from "react";
import Button from "./Button";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

const Modal = ({ children, onClose, isOpen, title }) => {
  const ref = useOutsideClick(onClose);

  return (
    isOpen && (
      <div
        className="backdrop-blur-sm fixed top-0 left-0 
    w-full h-screen bg-secondary-800 bg-opacity-30 z-50"
      >
        <div
          ref={ref}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          rounded-sm bg-secondary-0 p-4 shadow-lg transition-all duration-500 
          ease-out w-[calc(100-vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto "
        >
          <div className="flex items-center justify-between border-b pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <Button onClick={onClose} title={<HiOutlineX />} className={"text-secondary-500"} />
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
