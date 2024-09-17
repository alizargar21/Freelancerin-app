import React from "react";
import Button from "./Button";
const ConfirmDelete = ({ resourceName , onClose , isDisabled , onConfirm }) => {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">آیا از حذف {resourceName} مطمن هستید؟</h2>
      <div className="flex justify-between items-center gap-x-16">
          <Button onClick={onClose} title={"لفو"} className="btn btn-primary flex-1" isDisabled={isDisabled}  />
          <Button onClick={onConfirm} title={"تایید"} className="btn btn-danger flex-1 py-3" isDisabled={isDisabled} />


      </div>
    </div>
  );
};

export default ConfirmDelete;
