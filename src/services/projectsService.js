import http from "./httpServices"
export function getOwnerProjectsApi() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}

export function removeProjectApi({id , data}){
  return http.delete(`/project/project/${id}`).then(({ data }) => data.data);
}