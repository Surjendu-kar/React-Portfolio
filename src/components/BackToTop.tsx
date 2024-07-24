import { useEffect, useRef } from "react";
import "../libs/easing.js";

const BackToTop = () => {
  const backToTopRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backToTopRef.current) {
        if (window.pageYOffset > 150) {
          backToTopRef.current.classList.remove("fadeOut");
          backToTopRef.current.style.display = "block";
          backToTopRef.current.classList.add("fadeIn");
        } else {
          backToTopRef.current.style.display = "none";
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
      style={{
        backgroundColor: "rgb(27 31 58)",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 10.3)",
      }}
    >
      <i className="fa fa-chevron-up"></i>
    </a>
  );
};

export default BackToTop;
