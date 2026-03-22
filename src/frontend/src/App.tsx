import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { NavBar } from "./components/NavBar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <NavBar />
        <main>
          <HeroSection />
          <ExperienceSection />
          <MenuSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster richColors position="bottom-right" />
    </QueryClientProvider>
  );
}
