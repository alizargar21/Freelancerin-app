import { useState } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { DarkModeProvider } from "./context/DarkModeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./features/proposal/Proposals";
import SubmittedProjects from "./features/freelancer/SubmittedProjects";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectRoute from "./ui/ProtectRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLayout from "./features/admin/AdminLayout";
import Users from "./pages/Users";
function App() {
  const queryClient = new QueryClient();
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/owner"
            element={
              <ProtectRoute>
                <OwnerLayout />
              </ProtectRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} replace />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectRoute>
                <FreelancerLayout />
              </ProtectRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} replace />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="proposals" element={<Proposals />} />
            <Route path="projects" element={<SubmittedProjects />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectRoute>
                <AdminLayout />
              </ProtectRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} replace />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />

          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Routes>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
