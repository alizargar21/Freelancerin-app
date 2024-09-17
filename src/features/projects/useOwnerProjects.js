import { getOwnerProjectsApi } from "../../services/ProjectsService";
import { useQuery } from "@tanstack/react-query";

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
    
  });
  const { projects } = data || {};
  console.log(projects);
  return { projects, isLoading };
}
