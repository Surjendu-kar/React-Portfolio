// Import images
import HealthHarbor_Img from "../assets/health.png";
import SkySight_Img from "../assets/skySIght-img.jpg";
import MovieMagnet_Img from "../assets/MovieMagnet.png";
import Tenzies_Img from "../assets/Tenzies_Img.png";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ProjectCard3D from "./ProjectCard3D";
import { styled } from "@mui/system";
import Gemini from "../assets/gemini.png";
import NextLevelFood from "../assets/nextLevelFood.png";
import Telegram from "../assets/telegram.png";
import TripVive from "../assets/TripVibe.png";
import NextEvent from "../assets/NextEvent.png";
import AdBanner from "../assets/AdBanner.png";
import BookAi from "../assets/BookAi.png";
import AnimatedCard from "./AnimatedCard";
import CryptoFlipImg from "../assets/CryptoFlipImg.png";
import HrManagementImg from "../assets/HrManagementImg.png";
import ByteUICore from "../assets/ByteUI-Core.png";
import KNow from "../assets/k-now.png";
import Learnix from "../assets/learnix.png";
import SpreadsheetPrototype from "../assets/spreadsheet-prototype.png";
import Ecommerce from "../assets/E-commerce.png";
import MotoLog from "../assets/motoLog.png";
import PizzaJoint from "../assets/PizzaJoint.png";
import Nexa from "../assets/nexa.png";

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
  gap: theme.spacing(5),
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: { gap: theme.spacing(2) },
}));

const MainProjectBox = styled(Box)(({ theme }) => ({
  width: "45%",
  minWidth: "45%",
  maxWidth: "45%",
  overflow: "visible",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: "48%",
    minWidth: "48%",
    maxWidth: "48%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    minWidth: "90%",
    maxWidth: "90%",
  },
}));

const Projects = () => {
  const theme = useTheme();

  return (
    <>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

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
        <Container sx={{ overflow: "visible" }}>
          {/* New Replica Projects Section */}
          <Box sx={{ textAlign: "center", margin: "3rem 0 1rem" }}>
            <Heading>Replica Projects</Heading>
            <HrLine />
          </Box>

          <MainProjects sx={{ overflow: "visible" }}>
            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="Nexa"
                  projectTitle="A visually stunning replica of the Ochi Design website, built with Next.js and styled with Tailwind CSS. This project showcases advanced front-end techniques, featuring smooth parallax scrolling effects powered by Locomotive Scroll and a wide array of additional, captivating animations created with Framer Motion to create a dynamic and engaging user experience."
                  mainImg={Nexa}
                  link="https://animated-web-next-js.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/NEXA-using-Motion"
                  technologies={[
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Locomotive Scroll",
                    "Framer Motion",
                  ]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="Gemini-Clone"
                  projectTitle="This project is a dynamic and responsive replica of the Gemini platform, designed to offer a seamless user experience akin to the original site. It utilizes ReactJs for efficient UI rendering, Material-UI (MUI) for a robust and flexible design system, and TypeScript. It also includes a toggle feature allowing users to switch between light and dark themes, enhancing accessibility and user preference compliance."
                  mainImg={Gemini}
                  link="https://itsmy-gemini-clone.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/Gemini-Clone"
                  technologies={["React", "TypeScript", "Material-UI"]}
                />
              </AnimatedCard>
            </MainProjectBox>
            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="Spreadsheet-Prototype"
                  projectTitle="This project is a static, front-end-only React prototype of a spreadsheet view, designed to visually match a provided Figma design and implement core spreadsheet functionalities. It leverages React 18, TypeScript 5.x, Vite, and Tailwind CSS 3.x for a pixel-perfect user experience. Key features include editable cells, dynamic column types with date pickers and dropdowns, keyboard navigation, column resizing, smooth hover effects, and text truncation. The spreadsheet provides a Google Sheet/Excel-like experience, focusing on a clean and readable layout."
                  mainImg={SpreadsheetPrototype}
                  link="https://spreadsheet-prototype.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/spreadsheet-prototype"
                  technologies={[
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "@tanstack/react-table",
                  ]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="MotoLog Landing Page"
                  projectTitle="A modern and interactive landing page built with Next.js 15, React 19, and Tailwind CSS 4. This project features dynamic animations using Framer Motion, integrated forms with React Hook Form and Yup for validation, and a sleek UI utilizing Lucide React for icons and Radix UI components. It's designed to provide a engaging user experience, likely for a motorcycle-related application or service."
                  mainImg={MotoLog}
                  link="https://webbywolf-cyan.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/webbywolf"
                  technologies={[
                    "Next.js 15",
                    "React 19",
                    "Tailwind CSS 4",
                    "Framer Motion",
                    "TypeScript",
                  ]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="Pizza Joint"
                  projectTitle="A front-end pizza ordering application built with React and Vite, serving as a practice project for learning and implementing Framer Motion. The project utilizes React Router DOM for navigation and is styled with Tailwind CSS, showcasing a clean and responsive user interface for creating custom pizzas."
                  mainImg={PizzaJoint}
                  link="https://pizza-joint-fm.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/Pizza-Joint-fm"
                  technologies={[
                    "React",
                    "Framer Motion",
                    "React Router DOM",
                    "Tailwind CSS",
                    "TypeScript",
                  ]}
                />
              </AnimatedCard>
            </MainProjectBox>
          </MainProjects>

          {/* react projects */}
          <Box sx={{ textAlign: "center", margin: "1rem 0" }}>
            <Heading>React Projects</Heading>
            <HrLine />
          </Box>

          <MainProjects>
            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="ByteUI-Core"
                  projectTitle="Developed and published a custom npm package featuring reusable Material-UI components with advanced styling effects. Implemented complex CSS animations using keyframes and styled-components for creating modern UI elements. Created comprehensive component interfaces with customizable properties for colors, backgrounds, and animations. Simplified component reusability by providing clear documentation and type definitions for developer experience."
                  mainImg={ByteUICore}
                  link="https://byteui-core.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/ByteUI-Core"
                  technologies={["Material-UI", "TypeScript", "npm"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="HealthHarbor"
                  projectTitle="Developed HealthHarbor, a cutting-edge healthcare platform leveraging ReactJS, TypeScript, MUI, and Supabase . This robust platform caters to two distinct user roles: patients and doctors. Doctors are required to submit their qualifications for thorough admin approval before their profiles are activated. Patients have the privilege of viewing doctor profiles and feedback without the need for registration. However, to book appointments and provide feedback, patients must log in to their accounts. The system seamlessly integrates with Stripe, ensuring secure and reliable payment transactions."
                  mainImg={HealthHarbor_Img}
                  link="https://health-harbor-beta.vercel.app"
                  repoLink="https://github.com/Surjendu-kar/Health-Harbor"
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
                <ProjectCard3D
                  projectName="Learnix"
                  projectTitle="Developed during my internship at Madrocket Technologies & Media Careers, this modern, responsive school website template focuses on user experience and accessibility. Implemented interactive UI components and animations to create an engaging educational platform. The template features a clean, professional design optimized for educational institutions."
                  mainImg={Learnix}
                  link="https://learnix-iqnaut.firebaseapp.com/"
                  technologies={["React", "TypeScript", "Material-UI"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="K-now"
                  projectTitle="Created during my internship at Madrocket Technologies & Media Careers, this comprehensive school website template focuses on modern design and user accessibility. Implemented responsive layouts and interactive components to showcase school information effectively. The template is designed to provide an intuitive experience for students, parents, and staff."
                  mainImg={KNow}
                  link="https://k-now-iqnaut.web.app/"
                  technologies={["React", "TypeScript", "Material-UI"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="Movie Magnet"
                  projectTitle="Developed a dynamic React-JS web application for movie enthusiasts, offering real-time access to trending, popular, and top-rated movies and TV shows. The application features comprehensive search functionality for users to easily find their favorite content. Advanced filtering options are integrated to allow customization of the viewing experience."
                  mainImg={MovieMagnet_Img}
                  link="https://movie-magnet-one.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/MovieMagnet"
                  technologies={["React", "Scss", "API Integration"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="CryptoFlip"
                  projectTitle="This project is a dynamic and responsive replica of the Gemini platform, designed to offer a seamless user experience akin to the original site. It utilizes ReactJs for efficient UI rendering, Material-UI (MUI) for a robust and flexible design system, and TypeScript for strong typing. It also includes a toggle feature allowing users to switch between light and dark themes, enhancing accessibility and user preference compliance. Additionally, we provide a simulated 10 ETH free balance for testing and interaction purposes. The project is currently in the development phase."
                  mainImg={CryptoFlipImg}
                  link="https://crypto-flip.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/CryptoFlip"
                  technologies={["React", "TypeScript", "Material-UI"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="Telegram-Clone"
                  projectTitle="Developed a pixel-perfect replica of the Telegram messaging app using ReactJS and Material-UI in a 48-hour assessment for a job application. Implemented responsive design for desktop and mobile views. Integrated two provided APIs: a paginated API to fetch and display a list of chats, and a message API to retrieve and show messages for a given chat id. Implemented dark and light mode functionality to enhance user experience. This project demonstrated my skills in ReactJS, Material-UI, API integration, and ability to deliver under pressure."
                  mainImg={Telegram}
                  link="https://its-my-telegram-clone.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/Telegram-Clone"
                  technologies={["React", "Material-UI", "API Integration"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="SkySight"
                  projectTitle="A comprehensive React application enabling users to securely log in, fetch real-time weather for their location, access 3-6 day forecasts, view detailed humidity and temperature graphs, seamlessly switch between favorite locations, and explore conditions via an interactive map."
                  mainImg={SkySight_Img}
                  link="https://skysight-v2.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/SkySight"
                  technologies={["React", "API Integration"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="Book-AI-replica"
                  projectTitle="This project replicates the 'Pricing' section of the TryBookAI.com website as part of a job assessment for a frontend development position. The focus of this replication was to create a component that is responsive, accessible, and maintains design fidelity with the original site. It has been developed using ReactJS, TypeScript, and Material-UI."
                  mainImg={BookAi}
                  link="https://book-ai-replica.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/Book-AI-replica"
                  technologies={["React", "MUI"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="Tenzies"
                  projectTitle="Developed a dice-based project using react where users click the Roll button to align all dice to the same value. Implemented a feature allowing users to freeze individual dice at their current value. Enhanced user experience through interactive gameplay mechanics."
                  mainImg={Tenzies_Img}
                  link="https://tenzies-game-eight-alpha.vercel.app/"
                  technologies={["React"]}
                />
              </AnimatedCard>
            </MainProjectBox>
          </MainProjects>

          <Box sx={{ textAlign: "center", margin: "3rem 0 1rem" }}>
            <Heading>NextJS Projects</Heading>
            <HrLine />
          </Box>

          <MainProjects>
            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="E-commerce Product Listing"
                  projectTitle="A modern, fully-featured e-commerce application built with Next.js 14, TypeScript, and Tailwind CSS. It features a responsive design, advanced filtering system, shopping cart functionality with localStorage persistence using Zustand, and real-time search capabilities. The project includes a pixel-perfect home page with product listings and filters, a product detail page with image carousel and reviews, and a comprehensive cart page with quantity controls and price summary."
                  mainImg={Ecommerce}
                  link="https://whatbytes-eight.vercel.app"
                  repoLink="https://whatbytes-eight.vercel.app/"
                  technologies={[
                    "Next.js 14",
                    "TypeScript",
                    "Tailwind CSS",
                    "Zustand",
                    "Lucide React",
                  ]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="TaskAlign-HR"
                  projectTitle="Developed a comprehensive HR management system using Next.js, TypeScript, Material-UI, and MongoDB. The application enables HR professionals to efficiently manage tasks, streamlining workflow and improving organizational productivity. Currently in the development phase."
                  mainImg={HrManagementImg}
                  link="https://taskalign-hr.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/TaskAlign-HR"
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
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="Ad Banners"
                  projectTitle="A dynamic Next.js application with TypeScript and MUI, designed for a job assignment to manage and display advertisement banners. It features an interactive UI that allows users to edit and save banner details like title, description, and images, including the option to download edited images. The system supports image uploads and offers persistence with local storage."
                  mainImg={AdBanner}
                  link="https://ad-banners.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/Ad-Banners"
                  technologies={["NextJS", "TypeScript", "Material-UI"]}
                />
              </AnimatedCard>
            </MainProjectBox>
            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="TripVibe"
                  projectTitle="Seamless travel planning and community experience powered by NextJS. In TripVibe, users can meticulously plan their trips by adding destinations along with specific dates and times. Each entry allows the addition of personal notes for activities planned at those times. The platform is designed to alert users with a popup message if there are any overlapping events, ensuring a smooth scheduling experience."
                  mainImg={TripVive}
                  link="https://trip-vibe.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/TripVibe"
                  technologies={["NextJS", "MongoDB"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="left">
                <ProjectCard3D
                  projectName="NextLevel Food"
                  projectTitle="Exploring modern culinary trends and delivering a delightful user experience with NextJS."
                  mainImg={NextLevelFood}
                  link="https://foodies-food.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/NextLevel-Food"
                  technologies={["NextJS", "Tailwind Css"]}
                />
              </AnimatedCard>
            </MainProjectBox>

            <MainProjectBox>
              <AnimatedCard direction="right">
                <ProjectCard3D
                  projectName="NextEvents"
                  projectTitle="Engage and discover local events with a dynamic, interactive platform using NextJS."
                  mainImg={NextEvent}
                  link="https://show-events.vercel.app/"
                  repoLink="https://github.com/Surjendu-kar/NextEvents"
                  technologies={["NextJS"]}
                />
              </AnimatedCard>
            </MainProjectBox>
          </MainProjects>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
