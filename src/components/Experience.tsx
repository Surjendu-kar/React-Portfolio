import {
  Box,
  Stack,
  styled,
  Typography,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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

const ExpCardLink = styled("a")({
  color: "inherit",
  textDecoration: "none",
  display: "block",
  width: "100%",
});

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

const CompanyHeading = styled('strong')({
  color: '#ffb405',
  display: 'block',
  marginBottom: '10px'
});

const ExpDescription = styled('li')({
  color: '#ffffffe3',
  marginBottom: '8px'
});

const tooltipStyles = {
  textAlign: "center",
  fontSize: "0.9rem",
  background: "#ffb405",
  color: "#000",
  fontWeight: 600,
  letterSpacing: "0.25px",
  boxShadow: "0 2px 10px rgba(250, 189, 47, 0.5)",
};

const tooltipStylesSm = {
  ...tooltipStyles,
  fontSize: "0.6rem",
  padding: "4px 8px",
};

function Experience() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="experience"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "5rem",
        overflow: "hidden",
      }}
    >
      <Heading>Experience</Heading>
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
          <ExpCardLink
            href="https://madrocket.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExpCard>
              <CompanyHeading>
                Madrocket Technologies & Media Careers - Full Stack Developer Intern [ Feb 2025 - June 2025 ]
              </CompanyHeading>
              <ul style={{ marginTop: "10px" }}>
                <ExpDescription>
                  Built modern, responsive school website templates (Learnix and K-now) focusing on user experience and accessibility.
                </ExpDescription>
                <ExpDescription>
                  Developed and enhanced a comprehensive school management system with automated report card generation, CSV bulk upload functionality for students/teachers/staff, integrated test management modules for periodic and topic-wise assessments, and integrated Quill editor for customizable school templates.
                </ExpDescription>
                <ExpDescription>
                  Enhanced IQnaut website by redesigning the Careers page with animated sections, improving course cards with real-time enrollment data and pricing, developed a custom backend for Razorpay payment integration with automated email notifications and PDF invoice generation.
                </ExpDescription>
                <ExpDescription>
                  Architected and developed a complete Course Management Platform from scratch with features including Authentication & User Management, Role-Based Access Control, Course Management, Interactive Course Details & Video Modules, Batch Management, Payment Integration with Razorpay, Assignment Management, and Ranking.
                </ExpDescription>
              </ul>
            </ExpCard>
          </ExpCardLink>
        </AnimatedCard>

        <AnimatedCard direction="right">
          <Tooltip
            title="Click to visit Weframe Tech's website"
            componentsProps={{
              tooltip: {
                sx: isSmallScreen ? tooltipStylesSm : tooltipStyles,
              },
            }}
            arrow
          >
            <ExpCardLink
              href="https://www.weframetech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExpCard>
                <CompanyHeading>
                  Weframe Tech - Full Stack Developer Intern [ Dec 2024 - Jan 2025 ]
                </CompanyHeading>
                <ul style={{ marginTop: "10px" }}>
                  <ExpDescription>
                    Developed modern web applications using Next.js, focusing on server-side rendering and API optimization.
                  </ExpDescription>
                  <ExpDescription>
                    Created dynamic landing pages and web solutions using Builder.io, Directus CMS, and Medusa.js for e-commerce.
                  </ExpDescription>
                  <ExpDescription>
                    Implemented responsive designs and complex UI components using Tailwind CSS and Material-UI.
                  </ExpDescription>
                  <ExpDescription>
                    Collaborated with cross-functional teams to deliver high-quality full-stack solutions.
                  </ExpDescription>
                </ul>
              </ExpCard>
            </ExpCardLink>
          </Tooltip>
        </AnimatedCard>

        <AnimatedCard direction="left">
          <Tooltip
            title="Click to visit Qubited's website"
            componentsProps={{
              tooltip: {
                sx: isSmallScreen ? tooltipStylesSm : tooltipStyles,
              },
            }}
            arrow
          >
            <ExpCardLink
              href="https://qubited.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExpCard>
                <CompanyHeading>
                  Qubited, Indore - ReactJs Intern [ June 2023 - Sept 2023 ]
                </CompanyHeading>
                <ul style={{ marginTop: "10px" }}>
                  <ExpDescription>
                    Developed and optimized React components using TypeScript and JavaScript.
                  </ExpDescription>
                  <ExpDescription>
                    Implemented performance enhancement strategies and code optimization techniques.
                  </ExpDescription>
                  <ExpDescription>
                    Utilized react-router, Material-UI, and Tailwind CSS for efficient UI development.
                  </ExpDescription>
                  <ExpDescription>
                    Integrated Firebase authentication and real-time database functionalities.
                  </ExpDescription>
                </ul>
              </ExpCard>
            </ExpCardLink>
          </Tooltip>
        </AnimatedCard>
      </Stack>
    </Box>
  );
}

export default Experience;
