import myImage from "../assets/mynewImg.png";
import Skills from "./Skills";
import { Box, styled, Typography, useTheme } from "@mui/material";
import AnimatedCard from "./AnimatedCard";
import BlurCard from "./BlurCard";
import Experience from "./Experience";

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
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));
const Highlight = styled(Typography)(() => ({
  color: "#FABD2F",
  fontWeight: "bold",
}));

const about_me = [
  {
    id: "first-p-about",
    content: `Full-Stack Developer with expertise in Next.js, React, and TypeScript, skilled in building comprehensive web
applications. Proficient in frontend and backend technologies, including Node.js, Firebase, Supabase, and MongoDB.
Experienced with CMS and Headless Commerce solutions like Builder.io, Directus CMS, and Medusa.js. Proven track
record of delivering scalable solutions through internship and freelance projects, with a custom npm package
demonstrating technical innovation.`,
  },
  // {
  //   id: "second-p-about",
  //   highlight:
  //     "Currently working as a Full Stack Developer at Weframe Tech, where I specialize in building modern web applications using Next.js and related technologies.",
  // },
];
const About = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      id="about"
      sx={{
        pt: "8rem",
        pb: 12,
        textAlign: "center",
        overflow: "hidden",
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

      {/* skills section*/}
      <Skills />

      {/* experience section */}
      <Experience />
    </Box>
  );
};

export default About;
