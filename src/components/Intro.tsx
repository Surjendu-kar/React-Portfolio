import { Box, Button, Typography, styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import GlareHover from "./GlareHover";

const Heading = styled(Typography)(({ theme }) => ({
  // color: "#fff",
  fontSize: "4.5rem",
  fontWeight: "600",
  fontFamily: "var(--bs-body-font-family)",
  [theme.breakpoints.down("lg")]: { fontSize: "4rem" },
  [theme.breakpoints.down("md")]: { fontSize: "2.5rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "2.15rem" },
}));
const TextTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 600,
  fontFamily: "var(--bs-body-font-family)",
  [theme.breakpoints.down("lg")]: { fontSize: "2rem" },
  [theme.breakpoints.down("md")]: { fontSize: "1.75rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.5rem" },
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1.05rem",
  marginTop: "1rem",
  width: "fit-content",
  color: "#fff",
  border: "1px solid #fff",
  backgroundColor: "transparent",
  transition: "0.5s",

  "&:hover": {
    color: "#fff",
    backgroundColor: "transparent",
    border: "1px solid #1976d2",
    letterSpacing: "0.15em",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.85rem",
    marginTop: "0.65rem",
    padding: "0.4rem 0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    marginTop: "0.5rem",
    padding: "0.3rem 0.7rem",
  },
}));

const IconButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: "6px",
  margin: "0 7px",
  color: "#fff",
  backgroundColor: "transparent",
  border: "1px solid #fff",
  borderRadius: "7px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid #1976d2",
  },
  "& svg": {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px",
    margin: "0 3px",
    borderRadius: "5px",
    "& svg": {
      fontSize: "17px",
    },
  },
}));

const Intro = () => {
  const words = ["Full Stack Developer", "Software Engineer", "Let's Connect!"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  const bottomVariants = {
    initial: { y: "100%", opacity: 0 },
    enter: {
      y: "0%",
      opacity: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const topVariants = {
    initial: { y: "-100%", opacity: 0 },
    enter: {
      y: "0%",
      opacity: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
    exit: {
      y: "100%",
      opacity: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const currentVariants = index % 2 === 0 ? bottomVariants : topVariants;

  return (
    <>
      <div id="home" className="intro route">
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Heading>Hello, I am Surjendu</Heading>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <TextTitle
                  style={{ overflow: "hidden", display: "inline-block" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={index}
                      variants={currentVariants}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      style={{ display: "inline-block" }}
                    >
                      {words[index]}
                    </motion.span>
                  </AnimatePresence>
                </TextTitle>
              </motion.div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ButtonStyle
                  variant="contained"
                  component="a"
                  href="https://drive.google.com/file/d/1NngFzR46TYGa3megPc2EGctynUVxyEX9"
                  {...{ target: "_blank", rel: "noopener noreferrer" }}
                >
                  View My Resume
                </ButtonStyle>
                <Box sx={{ display: "flex", marginTop: "1rem" }}>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/surjendu-kar/"
                    {...{ target: "_blank", rel: "noopener noreferrer" }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://github.com/Surjendu-kar"
                    {...{ target: "_blank", rel: "noopener noreferrer" }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="mailto:rahulkar9988@gmail.com"
                    {...{ target: "_blank", rel: "noopener noreferrer" }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
