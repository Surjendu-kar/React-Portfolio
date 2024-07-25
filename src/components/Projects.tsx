// Import images
import HealthHarbor_Img from "../assets/health.png";
import SkySight_Img from "../assets/skySIght-img.jpg";
import MovieMagnet_Img from "../assets/MovieMagnet.png";
import AstroNest_Img from "../assets/astronaut.jpg";
import Tenzies_Img from "../assets/Tenzies_Img.png";
import Instantech_Img from "../assets/infinite_img.webp";
import FlagNForecast_Img from "../assets/Flag&Forecast.jpg";
import { Box, Typography, useTheme } from "@mui/material";
import MainCard from "./MainCard";
import SmallCard from "./SmallCard";
import { styled } from "@mui/system";
import Gemini from "../assets/gemini.png";
import NextLevelFood from "../assets/nextLevelFood.png";
import Telegram from "../assets/telegram.png";
import TripVive from "../assets/TripVibe.png";
import NextEvent from "../assets/NextEvent.png";

import AnimatedCard from "./AnimatedCard";
import BlurCard from "./BlurCard";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: { width: "100%" },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "2.7rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "#ffffff",
  [theme.breakpoints.down("md")]: { fontSize: "2rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1.6rem" },
}));

const HrLine = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "5px",
  backgroundColor: "#ffffff",
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
  const theme = useTheme();
  return (
    <Box
      id="project"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0d1224",
        py: 12,
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          pt: "1rem",
        },
      }}
    >
      <Container>
        {/* react projects */}
        <Box sx={{ textAlign: "center", margin: "1rem 0" }}>
          <Heading>React Projects</Heading>
          <HrLine />
        </Box>

        <MainProjects>
          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"Gemini-Clone"}
                projectTitle={`Currently in development phase.`}
                mainImg={Gemini}
                link={"https://itsmy-gemini-clone.vercel.app/"}
              />
            </AnimatedCard>
          </MainProjectBox>
          <MainProjectBox>
            <AnimatedCard direction="right">
              <MainCard
                projectName={"Telegram-Clone"}
                projectTitle={`Developed a pixel-perfect replica of the Telegram messaging app using ReactJS and Material-UI in a 48-hour assessment for a job application. Implemented responsive design for desktop and mobile views. Integrated two provided APIs: a paginated API to fetch and display a list of chats, and a message API to retrieve and show messages for a given chat id. Implemented dark and light mode functionality to enhance user experience. This project demonstrated my skills in ReactJS, Material-UI, API integration, and ability to deliver under pressure.`}
                mainImg={Telegram}
                link={"https://its-my-telegram-clone.vercel.app/"}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"HealthHarbor"}
                projectTitle={`Developed HealthHarbor, a cutting-edge healthcare platform leveraging ReactJS, TypeScript, MUI, and Supabase . This robust platform caters to two distinct user roles: patients and doctors. Doctors are required to submit their qualifications for thorough admin approval before their profiles are activated. Patients have the privilege of viewing doctor profiles and feedback without the need for registration. However, to book appointments and provide feedback, patients must log in to their accounts. The system seamlessly integrates with Stripe, ensuring secure and reliable payment transactions.`}
                mainImg={HealthHarbor_Img}
                link={"https://health-harbor-beta.vercel.app"}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="right">
              <MainCard
                projectName={"Movie Magnet"}
                projectTitle={
                  "Developed a dynamic React-JS web application for movie enthusiasts, offering real-time access to trending, popular, and top-rated movies and TV shows. The application features comprehensive search functionality for users to easily find their favorite content. Advanced filtering options are integrated to allow customization of the viewing experience."
                }
                mainImg={MovieMagnet_Img}
                link={"https://movie-magnet-one.vercel.app/"}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"SkySight"}
                projectTitle={`A comprehensive React application enabling users to securely log in, fetch real-time weather for their location, access 3-6 day forecasts, view detailed humidity and temperature graphs, seamlessly switch between favorite locations, and explore conditions via an interactive map.`}
                mainImg={SkySight_Img}
                link={"https://skysight-v2.vercel.app/"}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="right">
              <MainCard
                projectName={"Tenzies"}
                projectTitle={`Developed a dice-based project using react where users click the Roll button to align all dice to the same value. Implemented a feature allowing users to freeze individual dice at their current value. Enhanced user experience through interactive gameplay mechanics.`}
                mainImg={Tenzies_Img}
                link={"https://tenzies-game-eight-alpha.vercel.app/"}
              />
            </AnimatedCard>
          </MainProjectBox>
        </MainProjects>

        <Box sx={{ textAlign: "center", margin: "3rem 0 1rem" }}>
          <Heading>NextJS Learning Projects</Heading>
          <HrLine />
        </Box>

        <MainProjects>
          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"TripVibe"}
                projectTitle="Seamless travel planning and community experience powered by NextJS. In TripVibe, users can meticulously plan their trips by adding destinations along with specific dates and times. Each entry allows the addition of personal notes for activities planned at those times. The platform is designed to alert users with a popup message if there are any overlapping events, ensuring a smooth scheduling experience."
                mainImg={TripVive}
                link={"https://trip-vibe.vercel.app/"}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="right">
              <MainCard
                projectName={"NextLevel Food"}
                projectTitle="Exploring modern culinary trends and delivering a delightful user experience with NextJS."
                mainImg={NextLevelFood}
                link={"https://foodies-food.vercel.app/"}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"NextEvents"}
                projectTitle="Engage and discover local events with a dynamic, interactive platform using NextJS."
                mainImg={NextEvent}
                link={"https://show-events.vercel.app/"}
              />
            </AnimatedCard>
          </MainProjectBox>
        </MainProjects>

        <Box sx={{ textAlign: "center", margin: "3rem 0 1rem" }}>
          <Heading>Others</Heading>
          <HrLine />
        </Box>

        <SmallProjects>
          <SmallProjectBox>
            <AnimatedCard direction="left">
              <SmallCard
                projectName={"AstroNest"}
                projectTitle={`Developed a React and TypeScript web app that allows users to retrieve astronaut details either by entering an astronaut ID or by clicking a 'Random Astronaut' button for random astronaut information.`}
                mainImg={AstroNest_Img}
                link={"https://myastro-nest.vercel.app/"}
              />
            </AnimatedCard>
          </SmallProjectBox>

          <SmallProjectBox>
            <BlurCard>
              <SmallCard
                projectName={"FlagNForecast"}
                projectTitle={`Developed a React and TypeScript web app that allows users to input partial or full country names, then displays detailed country information including the flag and capital, with an additional feature to fetch the current weather of the capital.`}
                mainImg={FlagNForecast_Img}
                link={"https://flag-and-forecast.vercel.app/"}
              />
            </BlurCard>
          </SmallProjectBox>
          <SmallProjectBox>
            <AnimatedCard direction="right">
              <SmallCard
                projectName={"Instantech"}
                projectTitle={`Developed a React and TypeScript web application implementing infinite scrolling, where new documents are dynamically loaded both as the user scrolls and at 3-second intervals.`}
                mainImg={Instantech_Img}
                link={"https://instantech-orcin.vercel.app/"}
              />
            </AnimatedCard>
          </SmallProjectBox>
        </SmallProjects>
      </Container>
    </Box>
  );
};

export default Projects;
