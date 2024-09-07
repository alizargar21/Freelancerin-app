import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./ui/AppLayout";
import Owner from "./pages/Owner";
function App() {
  const [count, setCount] = useState(0);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<AppLayout />}>
            <Route path="owner" element={<Owner />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Routes>
  
    </QueryClientProvider>
  );
}

export default App;
