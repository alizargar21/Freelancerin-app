import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authServices";
import { replace, useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate(
        "/auth",
        //? for not allowed to back this page after logout
        { replace: true }
      );
    },
    
  });
  return {isPending , logout}
}
