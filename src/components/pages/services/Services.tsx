import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import { services } from "./data";

import { tokens } from "../../../utils/theme";

const Services = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery("(max-width:600px)");
  const colors = tokens(theme.palette.mode);
  const router = useRouter();
  const servicesRoute = router.pathname === "/services";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: servicesRoute ? "1.25em" : undefined,
        background: theme.palette.grey[100],
        paddingTop: matchesSM ? "0.625em" : "1.875em",
        paddingBottom: matchesSM ? "0.625em" : "1.875em",
        borderTopLeftRadius: matchesSM ? 20 : 40,
        borderTopRightRadius: matchesSM ? 20 : 40,
      }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        color="primary"
        mt={5}
        mb="20px"
      >
        Services
      </Typography>
      <ServicesContainer>
        {services.map(({ title, image, paragraphs }, i) => (
          <ServiceContainer key={`${title}-${i}`}>
            <Typography variant="h4" textAlign="center" color="primary">
              {title}
            </Typography>
            <ServiceImageContainer>
              <ServiceImage src={image} alt="consulting" />
            </ServiceImageContainer>
            <Box>
              {paragraphs.map((paragraph, i) => (
                <ServiceText variant="body1" key={`${paragraph}-${i}`}>
                  {paragraph}
                </ServiceText>
              ))}
            </Box>
          </ServiceContainer>
        ))}
      </ServicesContainer>
    </Box>
  );
};

const ServicesContainer = styled(
  Box,
  {}
)(({}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "2em",
}));

const ServiceContainer = styled(
  Box,
  {}
)(({ theme }) => ({
  width: useMediaQuery(theme.breakpoints.down("sm")) ? "98%" : "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "justify",
  gap: useMediaQuery(theme.breakpoints.down("sm")) ? "0.5em" : "2em",
  padding: useMediaQuery(theme.breakpoints.down("sm")) ? "1em" : "2em",
  background: "#fff",
  borderRadius: "0.5em",
  cursor: "pointer",
  transition: theme.transitions.create("all 400ms ease-in"),
  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
    background: "transparent",
  },
}));

const ServiceImageContainer = styled(
  Box,
  {}
)(({ theme }) => ({
  height: useMediaQuery(theme.breakpoints.down("sm")) ? "100px" : "150px",
  width: useMediaQuery(theme.breakpoints.down("sm")) ? "100px" : "150px",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "1em",
}));

const ServiceImage = styled(
  Image,
  {}
)(({}) => ({
  maxWidth: "100%",
  height: "100%",
}));

const ServiceText = styled(
  Typography,
  {}
)(({ theme }) => ({
  fontSize: "1rem",
  textAlign: "justify",
}));

export default Services;
