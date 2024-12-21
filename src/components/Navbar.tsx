import { useState, useEffect } from "react";
import logo1 from "../img/male1.png";
import logo2 from "../img/male.png";
import { styled, Tooltip } from "@mui/material";

const Img = styled("img")(({ theme }) => ({
  width: "70px",
  height: "70px",
  [theme.breakpoints.down("md")]: { maxWidth: "80px" },
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
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
        // setLogo(logo2);
      } else {
        setNavBarClass("navbar-trans");
        setLogo(logo1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <nav
      className={`navbar navbar-b navbar-expand-md fixed-top ${navBarClass}`}
      id="mainNav"
    >
      <div className="container">
        <Tooltip title="Visit my GitHub" arrow placement="bottom">
          <a
            className="navbar-brand"
            href="https://github.com/Surjendu-kar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src={logo} alt="logo" />
          </a>
        </Tooltip>
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
              <a className="nav-link " href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#internship">
              internship
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
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
