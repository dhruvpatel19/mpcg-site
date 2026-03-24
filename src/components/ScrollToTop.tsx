import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = location.hash.replace("#", "");
    let attempts = 0;
    let timeoutId = 0;

    const scrollWhenReady = () => {
      const target = document.getElementById(id);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 144;
        window.scrollTo({
          top: Math.max(top, 0),
          behavior: "smooth",
        });
        return;
      }

      if (attempts < 20) {
        attempts += 1;
        timeoutId = window.setTimeout(scrollWhenReady, 75);
      }
    };

    scrollWhenReady();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.hash, location.pathname]);

  return null;
};
