import React from "react";
import myImage from "../assets/mynewImg.png";
import Skills from "./Skills";
import { Box, styled, Typography, useTheme } from "@mui/material";
import AnimatedCard from "./AnimatedCard";
import BlurCard from "./BlurCard";

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
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const Highlight = styled(Typography)(({ theme }) => ({
  color: "#FABD2F",
  fontWeight: "bold",
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
    highlight:
      " Currently, I am expanding my skill set by learning Next.js and MongoDB to further enhance my capabilities as a frontend developer.",
  },
];

const About = () => {
  const theme = useTheme();
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
        [theme.breakpoints.down("sm")]: {
          pt: "3rem",
          pb: 0,
        },
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
              <Box key={content.id}>
                <Typography sx={{ fontSize: "1.1rem", mb: 2 }}>
                  {content.content}
                </Typography>
                {content.highlight && (
                  <Highlight sx={{ fontSize: "1.1rem", mb: 2 }}>
                    {content.highlight}
                  </Highlight>
                )}
              </Box>
            ))}
          </Box>
        </AnimatedCard>
      </Box>
      
      <AnimatedCard direction="right">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Heading>Internship Experience</Heading>
          <HrLine />
          <Box
            textAlign="left"
            sx={{
              backgroundColor: "#11152c",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              padding: "2rem",
              borderRadius: "10px",
              maxWidth: "800px",
              width: "100%",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography sx={{ fontSize: "1.1rem", mb: 2 }}>
              <strong>
                Qubited, Indore - ReactJs Intern [ June 2023 - Sept 2023 ]
              </strong>
              <ul style={{ marginTop: "10px" }}>
                <li>
                  Developed and optimized React components using TypeScript and
                  JavaScript.
                </li>
                <li>
                  Implemented performance enhancement strategies and code
                  optimization techniques.
                </li>
                <li>
                  Utilized react-router, Material-UI, and Tailwind CSS for
                  efficient UI development.
                </li>
                <li>
                  Integrated Firebase authentication and real-time database
                  functionalities.
                </li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </AnimatedCard>

      <Skills />
    </Box>
  );
};

export default About;
