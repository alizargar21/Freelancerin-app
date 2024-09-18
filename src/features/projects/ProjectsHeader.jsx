import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import Button from "../../ui/Button";
function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="font-black text-secondary-700 text-xl">پروژه های شما</h1>
      <Modal
        title="اضافه کردن پروژه جدید"
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
      <Button
        onClick={() => setOpen(true)}
        title={
          <>
            <HiOutlinePlus />
            <span>اضافه کردن پروژه</span>
          </>
        }
        className="btn btn--primary flex justify-center items-center gap-x-2 w-64"
      />
    </div>
  );
}
export default ProjectsHeader;
