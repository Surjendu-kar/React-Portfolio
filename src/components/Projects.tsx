// Import images
import HealthHarbor_Img from "../assets/health.png";
import SkySight_Img from "../assets/skySIght-img.jpg";
import MovieMagnet_Img from "../assets/MovieMagnet.png";
import AstroNest_Img from "../assets/astronaut.jpg";
import Tenzies_Img from "../assets/Tenzies_Img.png";
import Instantech_Img from "../assets/infinite_img.webp";
import FlagNForecast_Img from "../assets/Flag&Forecast.jpg";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import MainCard from "./MainCard";
import SmallCard from "./SmallCard";
import { styled } from "@mui/system";
import Gemini from "../assets/gemini.png";
import NextLevelFood from "../assets/nextLevelFood.png";
import Telegram from "../assets/telegram.png";
import TripVive from "../assets/TripVibe.png";
import NextEvent from "../assets/NextEvent.png";
import AdBanner from "../assets/AdBanner.png";
import BookAi from "../assets/BookAi.png";
import AnimatedCard from "./AnimatedCard";
import BlurCard from "./BlurCard";
import CryptoFlipImg from "../assets/CryptoFlipImg.png";
import HrManagementImg from "../assets/HrManagementImg.png";
import ByteUICore from "../assets/ByteUI-Core.png";

const Container = styled(Box)(({ theme }) => ({
  width: "90%",
  [theme.breakpoints.down("md")]: { width: "100%" },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "2.7rem",
  fontWeight: "bold",
  textTransform: "uppercase",
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="project"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
                projectName={"ByteUI-Core"}
                projectTitle={`Developed and published a custom npm package featuring reusable Material-UI components with advanced styling effects. Implemented complex CSS animations using keyframes and styled-components for creating modern UI elements. Created comprehensive component interfaces with customizable properties for colors, backgrounds, and animations. Simplified component reusability by providing clear documentation and type definitions for developer experience.`}
                mainImg={ByteUICore}
                link={"https://itsmy-gemini-clone.vercel.app/"}
                technologies={["Material-UI", "TypeScript", "npm"]}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="right">
              <MainCard
                projectName={"HealthHarbor"}
                projectTitle={`Developed HealthHarbor, a cutting-edge healthcare platform leveraging ReactJS, TypeScript, MUI, and Supabase . This robust platform caters to two distinct user roles: patients and doctors. Doctors are required to submit their qualifications for thorough admin approval before their profiles are activated. Patients have the privilege of viewing doctor profiles and feedback without the need for registration. However, to book appointments and provide feedback, patients must log in to their accounts. The system seamlessly integrates with Stripe, ensuring secure and reliable payment transactions.`}
                mainImg={HealthHarbor_Img}
                link={"https://health-harbor-beta.vercel.app"}
                technologies={[
                  "React",
                  "TypeScript",
                  "MUI",
                  "Supabase",
                  "Stripe",
                ]}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"Gemini-Clone"}
                projectTitle={`This project is a dynamic and responsive replica of the Gemini platform, designed to offer a seamless user experience akin to the original site. It utilizes ReactJs for efficient UI rendering, Material-UI (MUI) for a robust and flexible design system, and TypeScript. It also includes a toggle feature allowing users to switch between light and dark themes, enhancing accessibility and user preference compliance. The project is currently in the development phase.`}
                mainImg={Gemini}
                link={"https://itsmy-gemini-clone.vercel.app/"}
                technologies={["React", "TypeScript", "Material-UI"]}
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
                technologies={["React", "Scss", "API Integration"]}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"CryptoFlip"}
                projectTitle={
                  "This project is a dynamic and responsive replica of the Gemini platform, designed to offer a seamless user experience akin to the original site. It utilizes ReactJs for efficient UI rendering, Material-UI (MUI) for a robust and flexible design system, and TypeScript for strong typing. It also includes a toggle feature allowing users to switch between light and dark themes, enhancing accessibility and user preference compliance. Additionally, we provide a simulated 10 ETH free balance for testing and interaction purposes. The project is currently in the development phase."
                }
                mainImg={CryptoFlipImg}
                link={"https://crypto-flip.vercel.app/"}
                technologies={["React", "TypeScript", "Material-UI"]}
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
                technologies={["React", "Material-UI", "API Integration"]}
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
                technologies={["React", "API Integration"]}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="right">
              <MainCard
                projectName={"Book-AI-replica"}
                projectTitle={`This project replicates the "Pricing" section of the TryBookAI.com website as part of a job assessment for a frontend development position. The focus of this replication was to create a component that is responsive, accessible, and maintains design fidelity with the original site. It has been developed using ReactJS, TypeScript, and Material-UI.`}
                mainImg={BookAi}
                link={"https://book-ai-replica.vercel.app/"}
                technologies={["React", "MUI"]}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <BlurCard>
              <MainCard
                projectName={"Tenzies"}
                projectTitle={`Developed a dice-based project using react where users click the Roll button to align all dice to the same value. Implemented a feature allowing users to freeze individual dice at their current value. Enhanced user experience through interactive gameplay mechanics.`}
                mainImg={Tenzies_Img}
                link={"https://tenzies-game-eight-alpha.vercel.app/"}
                technologies={["React"]}
              />
            </BlurCard>
          </MainProjectBox>
        </MainProjects>

        <Box sx={{ textAlign: "center", margin: "3rem 0 1rem" }}>
          <Heading>NextJS Projects</Heading>
          <HrLine />
        </Box>

        <MainProjects>
          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"TaskAlign-HR"}
                projectTitle={
                  "Developed a comprehensive HR management system using Next.js, TypeScript, Material-UI, and MongoDB. The application enables HR professionals to efficiently manage tasks, streamlining workflow and improving organizational productivity. Currently in the development phase."
                }
                mainImg={HrManagementImg}
                link={"https://taskalign-hr.vercel.app/"}
                technologies={[
                  "NextJS",
                  "Material-UI",
                  "TypeScript",
                  "MongoDB",
                ]}
              />
            </AnimatedCard>
          </MainProjectBox>

          <MainProjectBox>
            <AnimatedCard direction="right">
              <MainCard
                projectName={"Ad Banners"}
                projectTitle="A dynamic Next.js application with TypeScript and MUI, designed for a job assignment to manage and display advertisement banners. It features an interactive UI that allows users to edit and save banner details like title, description, and images, including the option to download edited images. The system supports image uploads and offers persistence with local storage."
                mainImg={AdBanner}
                link={"https://ad-banners.vercel.app/"}
                technologies={["NextJS", "TypeScript", "Material-UI"]}
              />
            </AnimatedCard>
          </MainProjectBox>
          <MainProjectBox>
            <AnimatedCard direction="left">
              <MainCard
                projectName={"TripVibe"}
                projectTitle="Seamless travel planning and community experience powered by NextJS. In TripVibe, users can meticulously plan their trips by adding destinations along with specific dates and times. Each entry allows the addition of personal notes for activities planned at those times. The platform is designed to alert users with a popup message if there are any overlapping events, ensuring a smooth scheduling experience."
                mainImg={TripVive}
                link={"https://trip-vibe.vercel.app/"}
                technologies={["NextJS", "MongoDB"]}
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
                technologies={["NextJS", "Tailwind Css"]}
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
                technologies={["NextJS"]}
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
                technologies={["React", "TypeScript"]}
              />
            </AnimatedCard>
          </SmallProjectBox>

          <SmallProjectBox>
            {isSmallScreen ? (
              <AnimatedCard direction="right">
                <SmallCard
                  projectName={"FlagNForecast"}
                  projectTitle={`Developed a React and TypeScript web app that allows users to input partial or full country names, then displays detailed country information including the flag and capital, with an additional feature to fetch the current weather of the capital.`}
                  mainImg={FlagNForecast_Img}
                  link={"https://flag-and-forecast.vercel.app/"}
                  technologies={["React", "TypeScript"]}
                />
              </AnimatedCard>
            ) : (
              <BlurCard>
                <SmallCard
                  projectName={"FlagNForecast"}
                  projectTitle={`Developed a React and TypeScript web app that allows users to input partial or full country names, then displays detailed country information including the flag and capital, with an additional feature to fetch the current weather of the capital.`}
                  mainImg={FlagNForecast_Img}
                  link={"https://flag-and-forecast.vercel.app/"}
                  technologies={["React", "TypeScript"]}
                />
              </BlurCard>
            )}
          </SmallProjectBox>
          <SmallProjectBox>
            <AnimatedCard direction={isSmallScreen ? "left" : "right"}>
              <SmallCard
                projectName={"Instantech"}
                projectTitle={`Developed a React and TypeScript web application implementing infinite scrolling, where new documents are dynamically loaded both as the user scrolls and at 3-second intervals.`}
                mainImg={Instantech_Img}
                link={"https://instantech-orcin.vercel.app/"}
                technologies={["React", "TypeScript"]}
              />
            </AnimatedCard>
          </SmallProjectBox>
        </SmallProjects>
      </Container>
    </Box>
  );
};

export default Projects;
