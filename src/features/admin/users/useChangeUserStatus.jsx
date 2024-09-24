import { useMutation } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authServices";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, changeUserStatus };
}
