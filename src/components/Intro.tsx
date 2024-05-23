import { Box, Button, Typography, styled } from "@mui/material";
import "./stars.scss";
import Typed from "react-typed";

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
  "&:hover": {
    color: "#1976d2",
    backgroundColor: "#fff",
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
                    strings={["Front End Developer", "Software Engineer"]}
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
                  href="https://drive.google.com/file/d/1n3xTuqvPRjJ79vbe5lqYZF4w4ymr0Ekl/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Resume
                </ButtonStyle>
                <ButtonStyle variant="contained" href="#project">
                  Projects
                </ButtonStyle>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
