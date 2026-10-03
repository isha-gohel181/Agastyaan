import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import FireflyEffect from "../components/FireflyEffect";

const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#050716] text-gray-900 dark:text-[#e9eefc] overflow-x-hidden transition-colors duration-500">

      {/* Global Interactive Firefly Particle System in Background Layer */}
      <FireflyEffect />

      {/* Header */}
      <Header />

      {/* Main Content Sections (Transparent wrapper so fireflies show behind all sections) */}
      <main className="relative z-10 pt-16 bg-transparent">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SiteLayout;