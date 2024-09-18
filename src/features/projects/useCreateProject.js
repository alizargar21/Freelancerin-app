import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/ProjectsService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    mutationKey: "",
    onSuccess: () => {
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
  return { isCreating, createProject };
}
