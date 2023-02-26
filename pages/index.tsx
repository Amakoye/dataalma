import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import type { NextPage } from "next";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import HeroImage from "../src/assets/HomepageHeroImage.gif";
import Learnmore from "../src/components/common/Learnmore";
import Services from "../src/components/pages/services/Services";
import { tokens } from "../src/utils/theme";
import { validationSchema } from "../src/utils/utils";
import About from "./about";
import Contact from "./contact";
const Home: NextPage = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery("(max-width:600px)");
  const colors = tokens(theme.palette.mode);

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, touched, handleChange, errors, getFieldProps, handleSubmit } =
    formik;
  return (
    <Stack direction="column">
      <Box
        sx={{
          display: "flex",
          flexDirection: matchesSM ? "column" : "row",
          height: matchesSM ? undefined : "90vh",
          alignItems: "center",
          marginTop: matchesSM ? "3em" : undefined,
          background: ` radial-gradient(circle, rgba(213,218,247,1) 0%, rgba(255,255,255,1) 100%, rgba(0,0,0,0) 100%)`,
          paddingRight: matchesSM ? "5px" : "5em",
          paddingLeft: matchesSM ? "5px" : "5em",
          gap: matchesSM ? 2 : 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: matchesSM ? "center" : undefined,
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
            textAlign={matchesSM ? "center" : undefined}
            sx={{
              marginBottom: 2,
              fontSize: matchesSM ? 16 : undefined,
            }}
          >
            Using data to create insights and cyber security services for the
            success of businesses.{!matchesSM && <br />}
            We provide data-driven solutions to companies and businesses by use
            of machine learning {!matchesSM && <br />} tools. We equally offer
            research services and automated cyber security detection solutions
            {!matchesSM && <br />} to businesses.
          </Typography>

          <Learnmore toLink="/services" />
        </Box>

        <Box>
          <Image
            height={matchesSM ? 300 : undefined}
            style={{ borderRadius: "50%" }}
            src={HeroImage}
            alt="Digital presentation"
          />
        </Box>
      </Box>
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
