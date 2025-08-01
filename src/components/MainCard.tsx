import {
  Box,
  Tooltip,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface CardProps {
  projectName: string;
  projectTitle: string;
  mainImg: string;
  link: string;
  technologies: string[];
}

const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  backgroundColor: "rgba(255, 255, 255, 0.025)",
  borderRadius: "10px",
  overflow: "hidden",
  transition: "transform 0.3s",
  boxShadow: "0 10px 10px rgba(0, 0, 0, 1.3)",
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    borderRadius: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "10px",
    boxShadow: "0 5px 5px rgba(0, 0, 0, 1.3)",
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
  borderRadius: "10px",
  [theme.breakpoints.down("md")]: { width: "100%", height: "15rem" },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "12rem",
    borderRadius: "10px",
  },
}));

const TitleBox = styled(Box)(({ theme }) => ({
  padding: "1rem",
  height: "14rem",
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

const StyledLink = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
  display: "block",
  position: "relative",
  zIndex: 1, // Ensure the link is above the glare effect
}));

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

function MainCard({
  projectName,
  projectTitle,
  mainImg,
  link,
  technologies,
}: CardProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Tooltip
      title={technologies.join(", ")}
      componentsProps={{
        tooltip: {
          sx: isSmallScreen ? tooltipStylesSm : tooltipStyles,
        },
      }}
      arrow
    >
      <StyledLink href={link} target="_blank" rel="noopener noreferrer">
        <MainBox>
          <ImgBox>
            <Img src={mainImg} alt={projectName} className="img-fluid" />
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
      </StyledLink>
    </Tooltip>
  );
}

export default MainCard;
