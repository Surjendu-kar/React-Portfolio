import { Box, Button, Typography, styled } from "@mui/material";
import "./stars.scss";
import Typed from "react-typed";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Heading = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "4.5rem",
  fontWeight: "600",
  fontFamily: "var(--bs-body-font-family)",
  [theme.breakpoints.down("lg")]: { fontSize: "4rem" },
  [theme.breakpoints.down("md")]: { fontSize: "2.3rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.5rem" },
}));
const TextTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 300,
  [theme.breakpoints.down("lg")]: { fontSize: "2rem" },
  [theme.breakpoints.down("md")]: { fontSize: "1.5rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  marginTop: "1rem",
  width: "fit-content",
  color: "#fff",
  border: "1px solid #fff",
  backgroundColor: "transparent",
  "&:hover": {
    color: "#1976d2",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid #1976d2",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.7rem",
    marginTop: "0.65rem",
    padding: "0.4rem 0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.55rem",
    marginTop: "0.5rem",
    padding: "0.3rem 0.7rem",
  },
}));

const IconButton = styled(Button)(({ theme }) => ({
  minWidth: 0,
  padding: "8px",
  marginLeft: "7px",
  marginRight: "7px",
  color: "#fff",
  backgroundColor: "transparent",
  border: "1px solid #fff",
  borderRadius: "7px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid #1976d2",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "6px",
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
                      "Front End Developer",
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
                  href="https://drive.google.com/file/d/1CIGokTVDPBK02J1AHsjj9g8Jvuz91Qjd/view"
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
