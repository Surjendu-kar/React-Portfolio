import { Box, Typography, styled } from "@mui/material";

interface CardProps {
  projectName: string;
  projectTitle: string;
  mainImg: string;
  link: string;
}

const MainBox = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  backgroundColor: "#11152c",
  borderRadius: "10px",
  // boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)", // Added white shadow for 3D effect
  overflow: "hidden",
  transition: "transform 0.3s",
  color: "white",
  height: "100%",
  // padding: "1rem 2rem",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)", // Enhanced shadow on hover
  },
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    marginBottom: "1rem",
    borderRadius: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0rem",
    borderRadius: "10px",
  },
}));

const ImgBox = styled(Box)(({ theme }) => ({
  display: "block",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

const Img = styled("img")(({ theme }) => ({
  width: "100%",
  height: "18rem",
  transition: "all 1s",
  borderRadius: "20px",

  [theme.breakpoints.down("md")]: { width: "100%", height: "15rem" },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "12rem",
    borderRadius: "10px",
  },

  "&:hover": {
    transform: "scale(1.3)",
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  padding: "1rem",
  minHeight: "13rem",
  [theme.breakpoints.down("lg")]: { height: "12rem" },
  [theme.breakpoints.down("md")]: { minHeight: "11rem", padding: "0.7rem" },
  [theme.breakpoints.down("sm")]: { height: "7rem", padding: "0.7rem" },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "1.7rem",
  [theme.breakpoints.down("md")]: { fontSize: "1.3rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "1rem" },
}));

const TextTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  [theme.breakpoints.down("lg")]: { fontSize: "0.75rem" },
  [theme.breakpoints.down("md")]: { fontSize: "0.62rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "0.6rem" },
}));

function MainCard({ projectName, projectTitle, mainImg, link }: CardProps) {
  return (
    <a
      href={link}
      style={{ textDecoration: "none", color: "inherit" }}
      target="_blank"
    >
      <MainBox>
        <ImgBox>
          <Img src={mainImg} alt="" className="img-fluid" />
        </ImgBox>
        <TitleBox>
          <Box>
            <Box>
              <Heading>{projectName}</Heading>
              <TextTitle>{projectTitle}</TextTitle>
            </Box>
          </Box>
        </TitleBox>
      </MainBox>
    </a>
  );
}

export default MainCard;
