import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CityProvider } from "./CityContext";
import { LanguageProvider } from "./i18n";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { ToastProvider } from "./components/ToastProvider";

const HomePage = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home })),
);
const LocalServicesPage = lazy(() =>
  import("./pages/LocalServices").then((module) => ({
    default: module.LocalServices,
  })),
);
const ServiceDetailPage = lazy(() =>
  import("./pages/ServiceDetail").then((module) => ({
    default: module.ServiceDetail,
  })),
);
const ContentPage = lazy(() =>
  import("./pages/ContentPage").then((module) => ({
    default: module.ContentPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound })),
);

const loadingFallback = (
  <div className="section-container py-24">
    <div
      className="rounded-3xl border border-stone-200 bg-white p-8 text-stone-600 shadow-sm"
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CityProvider>
        <ToastProvider>
          <Router>
            <ScrollToTop />
            <Layout>
              <Suspense fallback={loadingFallback}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/local-services" element={<LocalServicesPage />} />
                  <Route
                    path="/local-services/:serviceId"
                    element={<ServiceDetailPage />}
                  />
                  <Route path="/:pageId" element={<ContentPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </Layout>
          </Router>
        </ToastProvider>
      </CityProvider>
    </LanguageProvider>
  );
};

export default App;
