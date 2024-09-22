import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";

export function useProposals() {
  const {data , isLoading} = useQuery({
    queryKey: [""],
    queryFn: getProposalsApi,
  });
  const  {proposals}= data || {}
  return {proposals , isLoading}
}
