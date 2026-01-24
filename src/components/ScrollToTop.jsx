import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Riporta lo scroll in cima alla pagina ogni volta che il percorso cambia
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;