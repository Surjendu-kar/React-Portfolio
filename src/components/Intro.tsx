import { Box, Button, Typography, styled } from "@mui/material";
import "./stars.scss";
import Typed from "react-typed";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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
  fontWeight: 300,
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
  return (
    <>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <Heading>Hello, I am Surjendu</Heading>
              <TextTitle>
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Full Stack Developer",
                      "Software Engineer",
                      "Let's Connect!",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </TextTitle>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ButtonStyle
                  variant="contained"
                  href="https://drive.google.com/file/d/1wXuZ9_1APLjqKlyJzWKViVeC4oVKLxvK/view?usp=drivesdk"
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Resume
                </ButtonStyle>
                <Box sx={{ display: "flex", marginTop: "1rem" }}>
                  <IconButton
                    href="https://www.linkedin.com/in/surjendu-kar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    href="https://github.com/Surjendu-kar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    href="mailto:rahulkar9988@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
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
