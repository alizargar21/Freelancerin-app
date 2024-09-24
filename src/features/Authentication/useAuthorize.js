import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAuthorize() {
          const { user, isLoading } = useUser();
          const { pathname } = useLocation();
  let isAuthenticated = false;
  if (user) isAuthenticated = true;
  let isAuthorized = false;
  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };
 
  const desiredRole = pathname.split("/").at(1);
  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) {
      isAuthorized = true;
    }
  }
  return { isAuthenticated, isAuthorized, isLoading };
}
