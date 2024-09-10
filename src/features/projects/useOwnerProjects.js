import { getOwnerProjectsApi } from "../../services/ownerProjectsService";
import { useQuery } from "@tanstack/react-query";

export default function useOwnerProjects() {
   const {data , isLoading }= useQuery({
    queryKey: ["projects"],
    queryFn: getOwnerProjectsApi,
    retry: false,
  });
  const {projects  } = data || {}; 
  return {projects , isLoading}
}
