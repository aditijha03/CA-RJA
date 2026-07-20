import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { AppProviders } from "./app/AppProviders";
import { Loader } from "./components/ui/Loader";
import { Layout } from "./components/layout/Layout";
import { ScrollToTop } from "./components/common/ScrollToTop";

import { Home } from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
// @ts-ignore
import  Industries  from "./pages/Industries";
import Insights from "./pages/Insights";
import Updates from "./pages/Updates";

// 👇 New: separate component so we can safely call useLocation()
function AppRoutes() {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/services/:serviceSlug"
        element={<ServiceDetail key={location.pathname} />} // 👈 forces remount on slug change
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/industries/:slug" element={<Industries key={location.pathname} />} /> {/* same fix, optional but recommended */}
      <Route path="/insights" element={<Insights />} />
      <Route path="/updates" element={<Updates />} />
    </Routes>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AppProviders>
      {isLoading && (
        <Loader onLoadingComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <BrowserRouter>
          <ScrollToTop />
          <div className="fade-in-on-load">
            <Layout>
              <AppRoutes />
            </Layout>
          </div>
        </BrowserRouter>
      )}
    </AppProviders>
  );
}

export default App;