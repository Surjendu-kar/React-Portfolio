// Import images
import HealthHarbor_Img from "../assets/health.png";
import SkySight_Img from "../assets/skySIght-img.jpg";
import MovieMagnet_Img from "../assets/MovieMagnet.png";
import AstroNest_Img from "../assets/astronaut.jpg";
import Tenzies_Img from "../assets/Tenzies_Img.png";
import Instantech_Img from "../assets/infinite_img.webp";
import FlagNForecast_Img from "../assets/Flag&Forecast.jpg";
import { Box, Typography } from "@mui/material";
import MainCard from "./MainCard";
import SmallCard from "./SmallCard";
import { styled } from "@mui/system";
import Gemini from "../assets/gemini.png";
import NextLevelFood from "../assets/nextLevelFood.png";

const Container = styled(Box)(({ theme }) => ({
  width: "90%",
  [theme.breakpoints.down("md")]: { width: "100%" },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "2.7rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#ffffff", // Changed text color to white for better contrast
  [theme.breakpoints.down("md")]: { fontSize: "2rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.6rem" },
}));

const HrLine = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "5px",
  backgroundColor: "#ffffff", // Changed line color to white for better contrast
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const MainProjects = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  gap: theme.spacing(3),
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: { gap: theme.spacing(2) },
}));

const MainProjectBox = styled(Box)(({ theme }) => ({
  width: "45%",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: { width: "90%" },
}));

const SmallProjects = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {},
}));

const SmallProjectBox = styled(Box)(({ theme }) => ({
  width: "25%",
  [theme.breakpoints.down("md")]: { width: "35%" },
  [theme.breakpoints.down("sm")]: { width: "60%" },
}));

const Projects = () => {
  return (
    <Box
      id="project"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0d1224", // Same background color as the other sections
        py: 12, // Adding padding for top and bottom
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", margin: "1rem 0" }}>
          <Heading>Main Projects</Heading>
          <HrLine />
        </Box>

        <MainProjects>
          <MainProjectBox>
            <MainCard
              projectName={"Gemini-Clone"}
              projectTitle={`Currently in development phase.`}
              mainImg={Gemini}
              link={"https://itsmy-gemini-clone.vercel.app/"}
            />
          </MainProjectBox>

          <MainProjectBox>
            <MainCard
              projectName={"NextLevel Food"}
              projectTitle="NextLevel Food For NextLevel Foodies using NextJS [currently in development phase]"
              mainImg={NextLevelFood}
              link={"https://foodies-food.vercel.app/"}
            />
          </MainProjectBox>

          <MainProjectBox>
            <MainCard
              projectName={"HealthHarbor"}
              projectTitle={`Developed HealthHarbor, a cutting-edge healthcare platform leveraging ReactJS, TypeScript, MUI, and Supabase technologies. This robust platform caters to two distinct user roles: patients and doctors. Doctors are required to submit their qualifications for thorough admin approval before their profiles are activated. Patients have the privilege of viewing doctor profiles and feedback without the need for registration. However, to book appointments and provide feedback, patients must log in to their accounts. The system seamlessly integrates with Stripe, ensuring secure and reliable payment transactions.`}
              mainImg={HealthHarbor_Img}
              link={"https://health-harbor-beta.vercel.app"}
            />
          </MainProjectBox>

          <MainProjectBox>
            <MainCard
              projectName={"Movie Magnet"}
              projectTitle={
                "Developed a dynamic React-JS web application for movie enthusiasts, offering real-time access to trending, popular, and top-rated movies and TV shows. The application features comprehensive search functionality for users to easily find their favorite content. Advanced filtering options are integrated to allow customization of the viewing experience."
              }
              mainImg={MovieMagnet_Img}
              link={"https://movie-magnet-one.vercel.app/"}
            />
          </MainProjectBox>

          <MainProjectBox>
            <MainCard
              projectName={"SkySight"}
              projectTitle={`A comprehensive React application enabling users to securely log in, fetch real-time weather for their location, access 3-6 day forecasts, view detailed humidity and temperature graphs, seamlessly switch between favorite locations, and explore conditions via an interactive map.`}
              mainImg={SkySight_Img}
              link={"https://skysight-v2.vercel.app/"}
            />
          </MainProjectBox>

          <MainProjectBox>
            <MainCard
              projectName={"Tenzies"}
              projectTitle={`Developed a dice-based project using react where users click the Roll button to align all dice to the same value. Implemented a feature allowing users to freeze individual dice at their current value. Enhanced user experience through interactive gameplay mechanics.`}
              mainImg={Tenzies_Img}
              link={"https://tenzies-game-eight-alpha.vercel.app/"}
            />
          </MainProjectBox>
        </MainProjects>

        <Box sx={{ textAlign: "center", margin: "3rem 0 1rem" }}>
          <Heading>Others</Heading>
          <HrLine />
        </Box>

        <SmallProjects>
          <SmallProjectBox>
            <SmallCard
              projectName={"AstroNest"}
              projectTitle={`Developed a React and TypeScript web app that allows users to retrieve astronaut details either by entering an astronaut ID or by clicking a 'Random Astronaut' button for random astronaut information.`}
              mainImg={AstroNest_Img}
              link={"https://myastro-nest.vercel.app/"}
            />
          </SmallProjectBox>

          <SmallProjectBox>
            <SmallCard
              projectName={"FlagNForecast"}
              projectTitle={`Developed a React and TypeScript web app that allows users to input partial or full country names, then displays detailed country information including the flag and capital, with an additional feature to fetch the current weather of the capital.`}
              mainImg={FlagNForecast_Img}
              link={"https://flag-and-forecast.vercel.app/"}
            />
          </SmallProjectBox>
          <SmallProjectBox>
            <SmallCard
              projectName={"Instantech"}
              projectTitle={`Developed a React and TypeScript web application implementing infinite scrolling, where new documents are dynamically loaded both as the user scrolls and at 3-second intervals.`}
              mainImg={Instantech_Img}
              link={"https://instantech-orcin.vercel.app/"}
            />
          </SmallProjectBox>
        </SmallProjects>
      </Container>
    </Box>
  );
};

export default Projects;
