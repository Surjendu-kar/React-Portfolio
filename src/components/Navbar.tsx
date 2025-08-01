import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../img/male1.png";
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
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    const handleScroll = () => {
      // Only apply scroll-based background changes on desktop (md and above)
      if (!isMobile && window.pageYOffset > 50) {
        setNavBarClass("navbar-reduce");
      } else {
        setNavBarClass("navbar-trans");
        setLogo(logo1);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const handleNavCollapse = () => setIsCollapsed(!isCollapsed);

  const handleNavItemClick = () => {
    setIsCollapsed(true);
  };

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -30,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  };

  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: (custom) => ({
      rotate: custom.rotate,
      y: custom.y,
    }),
  };

  return (
    <nav
      className={`navbar navbar-b navbar-expand-md fixed-top ${navBarClass}`}
      id="mainNav"
      style={
        isMobile
          ? {
              backgroundColor: "rgba(13, 18, 36, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }
          : {}
      }
    >
      <div className="container">
        <Tooltip title="Visit my GitHub" arrow placement="bottom">
          <motion.a
            className="navbar-brand"
            href="https://github.com/Surjendu-kar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Img src={logo} alt="logo" />
          </motion.a>
        </Tooltip>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:block">
          <div
            className={`navbar-collapse collapse${isCollapsed ? "" : " show"}`}
            id="navbarDefault"
          >
            <ul className="navbar-nav ml-auto">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="nav-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Hamburger Button - only visible on mobile */}
        <motion.button
          className={
            "navbar-toggler md:hidden" + (!isCollapsed ? "" : " collapsed")
          }
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {!isCollapsed ? (
            // Close icon when menu is open
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </motion.svg>
          ) : (
            // Hamburger lines when menu is closed
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </motion.button>

        {/* Mobile Dropdown Menu - only visible on mobile */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              className="absolute top-full left-0 w-full md:hidden overflow-hidden"
              style={{
                backgroundColor: "rgba(13, 18, 36, 0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                zIndex: 10000,
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0px 6px 9px 0px rgba(0, 0, 0, 0.3)",
              }}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.div className="flex flex-col py-6 px-6 space-y-1">
                {/* Navigation Items */}
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    variants={itemVariants}
                    whileHover={{
                      x: 8,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      className="block py-3 px-4 text-white hover:text-blue-400 hover:bg-white/10 rounded-lg transition-all duration-300 text-lg font-medium border-b border-white/10 last:border-b-0"
                      href={item.href}
                      onClick={handleNavItemClick}
                    >
                      <motion.span
                        className="flex items-center justify-between"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                        <motion.span
                          className="text-blue-400 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </motion.span>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
