import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Box, Chip, useTheme, useMediaQuery } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ProjectCard3DProps {
  projectName: string;
  projectTitle: string;
  mainImg: string;
  link: string;
  repoLink?: string;
  technologies: string[];
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({
  projectName,
  projectTitle,
  mainImg,
  link,
  repoLink,
  technologies,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CardContainer className="inter-var w-full h-full flex-1">
      <CardBody
        className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:border-white/[0.1] border-black/[0.1] w-full h-auto sm:min-h-[600px] lg:min-h-[670px] rounded-xl p-3 lg:p-6 border flex flex-col"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.025)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-white mt-2"
        >
          {projectName}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={mainImg}
            height="1000"
            width="1000"
            className={`${
              isSmallScreen ? "h-40" : isMediumScreen ? "h-56" : "h-72"
            } w-full object-cover rounded-xl group-hover/card:shadow-xl`}
            alt={projectName}
          />
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-300 text-xs sm:text-sm mt-4 leading-relaxed flex-1"
        >
          {projectTitle}
        </CardItem>

        <CardItem translateZ="40" className="mt-0">
          <Box className="flex flex-wrap gap-1 sm:gap-2">
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: isSmallScreen ? "0.6rem" : "0.85rem",
                  height: isSmallScreen ? "20px" : "26px",
                  "& .MuiChip-label": {
                    padding: isSmallScreen ? "0 6px" : "0 10px",
                  },
                }}
              />
            ))}
          </Box>
        </CardItem>

        <div className="flex justify-between items-center mt-auto pt-4">
          <CardItem
            translateZ={20}
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-0 lg:px-4 py-2 rounded-xl text-xs font-normal text-white hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
          >
            <LaunchIcon sx={{ fontSize: "16px" }} />
            Live Demo →
          </CardItem>

          {repoLink && (
            <CardItem
              translateZ={20}
              as="a"
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 lg:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-[11px]  lg:text-xs font-bold flex items-center gap-2"
            >
              <GitHubIcon sx={{ fontSize: "16px" }} />
              View Repo
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard3D;
