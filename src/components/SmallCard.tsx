import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface CardProps {
  projectName: string;
  projectTitle: string;
  mainImg: string;
  link: string;
}
const MainBox = styled(Box)(({ theme }) => ({
  marginBottom: "3rem",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: "0 13px 8px -10px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  transition: "all 0.3s ease",

  "&:hover": {
    boxShadow: "0 13px 8px -10px rgba(0, 0, 0, 0.3)",
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
  height: "25rem",
  transition: "all 1s",
  borderRadius: "20px",

  [theme.breakpoints.down("md")]: { width: "100%", height: "15rem" },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "20rem",
    borderRadius: "10px",
  },

  "&:hover": {
    transform: "scale(1.3)",
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  padding: "1rem",
  height: "13rem",
  [theme.breakpoints.down("lg")]: { height: "12rem" },
  [theme.breakpoints.down("md")]: { height: "10rem", padding: "0.7rem" },
  [theme.breakpoints.down("sm")]: { height: "6rem", padding: "0.4rem" },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "1.7rem",
  [theme.breakpoints.down("md")]: { fontSize: "1.3rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "0.9rem" },
}));

const TextTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  [theme.breakpoints.down("lg")]: { fontSize: "0.75rem" },
  [theme.breakpoints.down("md")]: { fontSize: "0.6rem" },
  [theme.breakpoints.down("sm")]: { fontSize: "0.52rem" },
}));
function SmallCard({ projectName, projectTitle, mainImg, link }: CardProps) {
  return (
    <Box>
      <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
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
    </Box>
  );
}

export default SmallCard;
