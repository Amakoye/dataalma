import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import HeroImage from "../src/assets/HomepageHeroImage.gif";
import Learnmore from "../src/components/common/Learnmore";
import Contact from "../src/components/pages/contact/Contact";
import Services from "../src/components/pages/services/Services";
import Testmonials from "../src/components/pages/testmonials/TestMonials";
import { tokens } from "../src/utils/theme";
import About from "./about";
const Home: NextPage = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down(769));
  const matchesMD = useMediaQuery(theme.breakpoints.between(769, 1300));
  const colors = tokens(theme.palette.mode);

  return (
    <Stack direction="column">
      <Box
        sx={{
          display: "flex",
          flexDirection: matchesSM ? "column" : "row",
          height: matchesSM ? undefined : matchesMD ? "100%" : "90vh",
          alignItems: "center",
          marginTop: matchesSM ? "3em" : undefined,
          background: ` radial-gradient(circle, rgba(213,218,247,1) 0%, rgba(255,255,255,1) 100%, rgba(0,0,0,0) 100%)`,
          paddingTop: matchesMD ? "5em" : undefined,
          paddingBottom: matchesMD ? "5em" : undefined,
          paddingRight: matchesSM ? "5px" : "5em",
          paddingLeft: matchesSM ? "5px" : "5em",
          gap: matchesSM ? 2 : 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: matchesSM ? "center" : matchesMD ? "center" : undefined,
            width: matchesSM ? undefined : matchesMD ? undefined : "40%",
          }}
        >
          <Typography
            variant="h1"
            color="primary"
            textAlign={matchesSM ? "center" : undefined}
            sx={{
              fontSize: matchesSM ? 30 : 50,
              fontWeight: "bold",
              letterSpacing: matchesSM ? 5 : 10,
            }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(" Data Alma.").start();
              }}
              options={{
                cursor: "",
                delay: 120,
              }}
            />
          </Typography>
          <Typography
            variant="body1"
            textAlign={matchesSM ? "center" : "justify"}
            sx={{
              marginBottom: 2,
              fontSize: "1rem",
            }}
          >
            Using data to create insights and cyber security services for the
            success of businesses. We provide data-driven solutions to companies
            and businesses by use of machine learning tools. We equally offer
            research services and automated cyber security detection solutions
            to businesses.
          </Typography>

          <Learnmore toLink="/services" />
        </Box>
        {!matchesMD && (
          <Box>
            <Image
              height={matchesSM ? 300 : undefined}
              style={{ borderRadius: "50%" }}
              src={HeroImage}
              alt="Digital presentation"
            />
          </Box>
        )}
      </Box>
      {/* Clients and partners */}
      <Testmonials />
      {/* Services */}
      <Services />
      {/* About */}
      <About />

      {/* Contact us */}
      <Contact />
    </Stack>
  );
};

export default Home;
