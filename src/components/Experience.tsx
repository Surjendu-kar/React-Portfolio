import { Box, Stack, styled, Typography } from "@mui/material";
import AnimatedCard from "./AnimatedCard";

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

const ExpCard = styled(Box)(() => ({
  backgroundColor: "#11152c",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  padding: "2rem",
  borderRadius: "10px",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

function Experience() {
  return (
    <Box
      id="internship"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "5rem",
        overflow: "hidden",
      }}
    >
      <Heading>Internship Experience</Heading>
      <HrLine />
      <Stack
        textAlign="left"
        sx={{
          maxWidth: "800px",
          width: "100%",
          gap: 2,
        }}
      >
        <AnimatedCard direction="left">
          <ExpCard>
            <strong>
              Weframe Tech - Full Stack Developer Intern [ Dec 2024 - Present ]
            </strong>
            <ul style={{ marginTop: "10px" }}>
              <li>
                Building modern web applications using Next.js, focusing on
                server-side rendering and API optimization.
              </li>
              <li>
                Creating dynamic landing pages and web solutions using
                Builder.io, Directus CMS, and Medusa.js for e-commerce.
              </li>
              <li>
                Implementing responsive designs and complex UI components using
                Tailwind CSS and Material-UI.
              </li>
              <li>
                Collaborating with cross-functional teams to deliver
                high-quality full-stack solutions.
              </li>
            </ul>
          </ExpCard>
        </AnimatedCard>

        <AnimatedCard direction="right">
          <ExpCard>
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
          </ExpCard>
        </AnimatedCard>
      </Stack>
    </Box>
  );
}

export default Experience;
