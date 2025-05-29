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

const AboutContent = styled(Typography)(() => ({
  color: "#ffffffe3",
  fontSize: "1.1rem",
  marginBottom: "1rem"
}));

const about_me = [
  {
    id: "first-p-about",
    content: `Full-Stack Developer with 8+ months of hands-on professional experience building comprehensive web applications. 
Key achievements include publishing a custom npm package (ByteUI-Core), completing multiple successful internships across diverse tech companies, 
and delivering end-to-end full-stack solutions including school management systems and course platforms. Proven track record of delivering 
scalable web solutions with technical innovation and cross-platform expertise.`,
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
                <AboutContent>
                  {content.content}
                </AboutContent>
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
