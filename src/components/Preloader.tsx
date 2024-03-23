import { useEffect } from "react";

const Preloader = () => {
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        setTimeout(() => {
          preloader.style.display = "none";
        }, 100);
      }
    };

    // Attach the event listener
    window.addEventListener("load", handleLoad);

    // Clean up
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return <div id="preloader"></div>;
};

export default Preloader;
