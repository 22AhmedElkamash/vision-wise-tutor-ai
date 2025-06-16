
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VQAPage from "./pages/VQAPage";
import HomeworkPage from "./pages/HomeworkPage";
import ChatbotPage from "./pages/ChatbotPage";
import InteractivePage from "./pages/InteractivePage";
import GeneratorPage from "./pages/GeneratorPage";
import LanguagePage from "./pages/LanguagePage";
import ExplanationPage from "./pages/ExplanationPage";
import LabPage from "./pages/LabPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vqa" element={<VQAPage />} />
          <Route path="/homework" element={<HomeworkPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/interactive" element={<InteractivePage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/language" element={<LanguagePage />} />
          <Route path="/explanation" element={<ExplanationPage />} />
          <Route path="/lab" element={<LabPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
