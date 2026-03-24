import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/analytics";
import { EmergencyQuickActions } from "./EmergencyQuickActions";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <Header />
      <div className="fixed inset-0 -z-10 overflow-hidden print:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.04),_transparent_30%)]" />
      </div>
      <main className="pb-40 pt-32 sm:pt-36 lg:pb-24">{children}</main>
      <Footer />
      <EmergencyQuickActions />
    </div>
  );
};
