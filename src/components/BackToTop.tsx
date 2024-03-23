import { useEffect, useRef } from "react";
import "../libs/easing.js";

const BackToTop = () => {
  // Specify the type for useRef
  const backToTopRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the current reference is not null
      if (backToTopRef.current) {
        if (window.pageYOffset > 150) {
          backToTopRef.current.classList.remove("fadeOut");
          backToTopRef.current.style.display = "block";
          backToTopRef.current.classList.add("fadeIn");
        } else {
          backToTopRef.current.style.display = "none"; // Hide when not scrolled down
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      className="back-to-top animated"
      onClick={scrollToTop}
      ref={backToTopRef}
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  );
};

export default BackToTop;
