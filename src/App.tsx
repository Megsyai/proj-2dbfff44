
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Music, Home, BookOpen, Camera, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import HomePage from "./pages/Home";
import SongsPage from "./pages/Songs";
import MuseumPage from "./pages/Museum";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "الرئيسية", path: "/", icon: Home },
    { name: "أغاني الخلود", path: "/songs", icon: Music },
    { name: "المتحف", path: "/museum", icon: Camera },
    { name: "تواصل معنا", path: "/contact", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-yellow-900/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-yellow-500 tracking-widest">
              كوكب الشرق
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200",
                    isActive ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-300 hover:text-yellow-400"
                  )
                }
              >
                <item.icon className="w-4 h-4 ml-2" />
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-yellow-900/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-yellow-500 border-b border-yellow-900/10"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-neutral-900 text-gray-400 py-12 border-t border-yellow-900/20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-yellow-600 font-serif text-2xl mb-4">أم كلثوم</h2>
      <p className="max-w-2xl mx-auto mb-8 font-light italic leading-relaxed">
        "إنما الصبر حدود، يا حبيبي يا أغلى من عيني"
      </p>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="#" className="hover:text-yellow-500 transition-colors">فيسبوك</a>
        <a href="#" className="hover:text-yellow-500 transition-colors">إنستجرام</a>
        <a href="#" className="hover:text-yellow-500 transition-colors">يوتيوب</a>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} أرشيف كوكب الشرق - جميع الحقوق محفوظة</p>
    </div>
  </footer>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="bg-black text-white min-h-screen font-sans selection:bg-yellow-500/30 selection:text-yellow-200" dir="rtl">
        <Toaster />
        <BrowserRouter>
          <Navbar />
          <div className="pt-20">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/songs" element={<SongsPage />} />
              <Route path="/museum" element={<MuseumPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
