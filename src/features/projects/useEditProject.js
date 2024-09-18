import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/ProjectsService";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    
    onSuccess: (data) => {
      toast.success(data.message);
      //? for resend get request and give all project again
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
     

    },
  });
  return { isEditing, editProject };
}
