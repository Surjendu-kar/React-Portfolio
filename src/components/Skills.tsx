// @flow strict

import React from "react";
import Marquee from "react-fast-marquee";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  styled,
} from "@mui/material";
import nextjsSvg from "../assets/skills/nextJS.svg";
import reactSvg from "../assets/skills/react.svg";
import typescriptSvg from "../assets/skills/typescript.svg";
import javascriptSvg from "../assets/skills/javascript.svg";
import muiSvg from "../assets/skills/materialui.svg";
import tailwindSvg from "../assets/skills/tailwind.svg";
import htmlSvg from "../assets/skills/html.svg";
import cssSvg from "../assets/skills/css.svg";
import firebaseSvg from "../assets/skills/firebase.svg";
import bootstrapSvg from "../assets/skills/bootstrap.svg";
import cSvg from "../assets/skills/c.svg";
import gitSvg from "../assets/skills/git.svg";
import javaSvg from "../assets/skills/java.svg";
import mongoDBSvg from "../assets/skills/mongoDB.svg";
import mysqlSvg from "../assets/skills/mysql.svg";
import postgresqlSvg from "../assets/skills/postgresql.svg";
import pythonSvg from "../assets/skills/python.svg";
import vitejsSvg from "../assets/skills/vitejs.svg";
import supabase from "../assets/skills/supabase.svg";
import chakra from "../assets/skills/chakra.svg";

import "./glow.css"; // Ensure you import the glow styles
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
const skillsData = [
  "NextJS",
  "ReactJS",
  "TypeScript",
  "JavaScript",
  "MUI",
  "Chakra",
  "Tailwind CSS",
  "Bootstrap",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Supabase",
  "HTML5",
  "CSS",
  "C",
  "Java",
  "Python",
  "Vite",
  "Git",
];

const skillsImage = (skill) => {
  const images = {
    NextJS: nextjsSvg,
    ReactJS: reactSvg,
    TypeScript: typescriptSvg,
    JavaScript: javascriptSvg,
    MUI: muiSvg,
    "Tailwind CSS": tailwindSvg,
    Chakra: chakra,
    Bootstrap: bootstrapSvg,
    MongoDB: mongoDBSvg,
    MySQL: mysqlSvg,
    PostgreSQL: postgresqlSvg,
    Firebase: firebaseSvg,
    Supabase: supabase,
    HTML5: htmlSvg,
    CSS: cssSvg,
    C: cSvg,
    Java: javaSvg,
    Python: pythonSvg,
    Git: gitSvg,
    Vite: vitejsSvg,
  };

  return images[skill];
};

function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 5,
        backgroundColor: "#0d1224",
        color: "white",
        borderTop: "1px solid #25213b",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ textAlign: "center", margin: "1rem 0" }}>
        <Heading>Skills</Heading>
        <HrLine />
      </Box>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {skillsData.map((skill, id) => (
          <Box
            key={id}
            sx={{ display: "inline-block", mx: 2, marginTop: "1rem" }}
          >
            <Card
              className="skill-card"
              sx={{
                backgroundColor: "#11152c",
                borderRadius: 2,
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.15)",
                },
                padding: "1rem 2rem",
              }}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  image={skillsImage(skill)}
                  alt={skill}
                  sx={{
                    width: 40,
                    height: 40,
                    margin: "0 auto",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                  }}
                >
                  {skill}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}

export default Skills;
