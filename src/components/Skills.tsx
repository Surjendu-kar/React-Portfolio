import Marquee from "react-fast-marquee";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  styled,
  useTheme,
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
import "./glow.css";
import builderio from "../assets/skills/builder.svg";
import directus from "../assets/skills/directus.webp";
import medusa from "../assets/skills/medusa.png";
import docker from "../assets/skills/docker-svgrepo-com.svg";
import Razorpay from "../assets/skills/razorpay.png";

const MainConatainer = styled(Box)(({ theme }) => ({
  paddingTop: "6rem",
  textAlign: "center",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    paddingTop: "1rem",
  },
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

const SkillCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.025)",
  borderRadius: 7,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  textAlign: "center",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.15)",
    backgroundColor: "rgba(255, 255, 255, 0.035)",
  },
  padding: "1rem 2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem 1rem",
  },
}));

const CardMediaStyle = styled(CardMedia)(({ theme }) => ({
  width: 50,
  height: 50,
  margin: "0 auto",
  // mb: 2,
  [theme.breakpoints.down("sm")]: {
    width: 30,
    height: 30,
  },
}));

const skillsData = [
  "NextJS",
  "ReactJS",
  "docker",
  "Razorpay",
  "builderio",
  "directus",
  "medusa",
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

const skillsImage = (skill: string): string => {
  const images: { [key: string]: string } = {
    NextJS: nextjsSvg,
    ReactJS: reactSvg,
    docker: docker,
    Razorpay: Razorpay,
    builderio: builderio,
    directus: directus,
    medusa: medusa,
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
  const theme = useTheme();
  return (
    <MainConatainer id="skills">
      <div id="stars3" />
      <Box sx={{ textAlign: "center", margin: "1rem 0" }}>
        <Heading>Skills</Heading>
        <HrLine />
      </Box>
      <Marquee
        gradient={false}
        speed={150}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
        style={{ overflowY: "hidden" }}
      >
        {skillsData.map((skill, id) => (
          <Box
            key={id}
            sx={{ display: "inline-block", mx: 2, padding: "2rem 0rem" }}
          >
            <SkillCard>
              <CardContent>
                <CardMediaStyle image={skillsImage(skill)} />
                <Typography
                  variant="body1"
                  sx={{
                    mt: "1rem",
                    color: "white",
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "0.75rem",
                    },
                  }}
                >
                  {skill}
                </Typography>
              </CardContent>
            </SkillCard>
          </Box>
        ))}
      </Marquee>
    </MainConatainer>
  );
}

export default Skills;
