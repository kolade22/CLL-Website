import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router keeps the scroll position between routes — reset it so every
// page starts at the top like a traditional site.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
