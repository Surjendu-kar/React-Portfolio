import React from "react";
import myImage from "../assets/mynewImg.png";
import Skills from "./Skills"; // Adjust the import path as necessary
import { Box, styled, Typography } from "@mui/material";
import AnimatedCard from "./AnimatedCard";
import BlurCard from "./BlurCard";

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
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const about_me = [
  {
    id: "first-p-about",
    content:
      "Aspiring Frontend Developer with expertise in ReactJS and TypeScript, seeking to leverage my skills in modern web technologies to contribute to innovative projects and grow within a dynamic team. I have hands-on experience in developing and optimizing React components, implementing performance enhancement strategies, and utilizing various UI libraries and frameworks like Material-UI and Tailwind CSS.",
  },
  {
    id: "second-p-about",
    content:
      "During my internship at Qubited, I contributed significantly to the development of a world tour freelancer project, enhancing user experience and interface design. I also have experience in integrating Firebase authentication and real-time database functionalities.",
  },
  {
    id: "third-p-about",
    content:
      "I have developed multiple personal projects, including HealthHarbor, a healthcare platform; MovieMagnet, a dynamic movie web application; and SkySight, a comprehensive weather application. My academic background in Computer Application from Dr. B.C Roy Engineering College, coupled with my industrial training, has equipped me with a solid foundation in frontend development.",
  },
  {
    id: "fourth-p-about",
    content:
      "Currently, I am expanding my skill set by learning Next.js and MongoDB to further enhance my capabilities as a frontend developer.",
  },
];

const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        pt: "5rem",
        pb: 12,
        backgroundColor: "#0d1224",
        color: "white",
        textAlign: "center",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
        <BlurCard>
          <Box>
            <img
              src={myImage}
              alt=""
              style={{
                width: "70%",
                maxWidth: "300px",
                height: "auto",
                borderRadius: "10%",
                margin: "0 auto",
                display: "block",
              }}
            />
          </Box>
        </BlurCard>
        <AnimatedCard direction="left">
          <Box mt={4}>
            <Heading> About Me</Heading>
            <HrLine />

            {about_me.map((content) => (
              <Typography key={content.id} sx={{ fontSize: "1.1rem", mb: 2 }}>
                {content.content}
              </Typography>
            ))}
          </Box>
        </AnimatedCard>
      </Box>
      <Skills />
    </Box>
  );
};

export default About;
