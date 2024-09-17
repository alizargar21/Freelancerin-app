import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/ProjectsService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
         const queryClient =  useQueryClient()
 const { mutate : removeProject, isPending : isDeleting } =  useMutation({
    mutationFn: removeProjectApi(),
    onSuccess: () => {
      toast.success("پروژه با موفقیت حذف شد");
      //? for resend get request and give all project again
      queryClient.invalidateQueries({
          queryKey : ["owner-projects"]
      })
    },
    onError : (err)=> { toast.error(err?.response?.data?.message)}
    
  });
  return {removeProject , isDeleting}
}
