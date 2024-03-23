import { useState, useEffect } from "react";
import logo1 from "../img/male1.png";
import logo2 from "../img/male.png";
import { styled } from "@mui/material";

const Img = styled("img")(({ theme }) => ({
  maxWidth: "100px",
  [theme.breakpoints.down("md")]: { maxWidth: "80px" },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "60px",
  },
}));

const Navbar = () => {
  const [logo, setLogo] = useState(logo1);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [navBarClass, setNavBarClass] = useState("navbar-trans");
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setNavBarClass("navbar-reduce");
        setLogo(logo2);
      } else {
        setNavBarClass("navbar-trans");
        setLogo(logo1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavCollapse = () => setIsCollapsed(!isCollapsed);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navbar navbar-b navbar-expand-md fixed-top ${navBarClass}`}
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="https://github.com/Dev-Surjendu">
          <Img src={logo} alt="logo" />
        </a>
        <button
          className={"navbar-toggler" + (!isCollapsed ? "" : " collapsed")}
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`navbar-collapse collapse${isCollapsed ? "" : " show"}`}
          id="navbarDefault"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("project")}
              >
                Project
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
