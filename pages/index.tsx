import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import type { NextPage } from "next";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import AboutImage from "../src/assets/About.png";
import HeroImage from "../src/assets/HomepageHeroImage.gif";
import ContactImage from "../src/assets/Service_ 24_7.gif";
import Learnmore from "../src/components/common/Learnmore";
import Services from "../src/components/pages/services/Services";
import { tokens } from "../src/utils/theme";
import { validationSchema } from "../src/utils/utils";
const Home: NextPage = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
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
      <Box
        sx={{
          display: "flex",
          flexDirection: matchesSM ? "column" : "row",
          paddingTop: "15px",
          paddingLeft: matchesSM ? undefined : "5em",
          paddingRight: matchesSM ? undefined : "5em",
          background: colors.peranoBlue[100],
          alignItems: "center",
          height: matchesSM ? undefined : "80vh",
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
            variant="h2"
            color="primary"
            textAlign={matchesSM ? "center" : undefined}
          >
            About us
          </Typography>
          <Typography
            variant="body1"
            textAlign={matchesSM ? "center" : undefined}
            sx={{
              marginBottom: 2,
              fontSize: matchesSM ? 16 : undefined,
            }}
          >
            Data Alma specializes in IT consulting. We provide a wide range of
            IT-related services including business analytics,
            {!matchesSM && <br />}
            data protection and privacy services, network design and
            implementation, cloud solutions, cybersecurity, and project
            {!matchesSM && <br />}management. We have a team of experienced
            professionals who work closely with clients to understand their
            unique {!matchesSM && <br />}
            needs and provide customized solutions to improve efficiency and
            productivity.
          </Typography>
          <Typography
            variant="body1"
            textAlign={matchesSM ? "center" : undefined}
            sx={{
              marginBottom: 2,
              fontSize: matchesSM ? 16 : undefined,
            }}
          >
            Our team of experts uses cutting-edge technology, such as machine
            learning and natural language processing, to help
            {!matchesSM && <br />} clients gain a deeper understanding of their
            customers, markets, and operations. They help businesses increase
            revenue, {!matchesSM && <br />} improve efficiency, and gain a
            competitive advantage.
          </Typography>
          <Learnmore toLink="/about" />
        </Box>

        <Box>
          <Image
            height={matchesSM ? 300 : undefined}
            style={{ borderRadius: "50%" }}
            src={AboutImage}
            alt="Digital presentation"
          />
        </Box>
      </Box>
      {/* Contact us */}
      <Box
        sx={{
          display: "flex",
          flexDirection: matchesSM ? "column-reverse" : "row",
          justifyContent: "space-between",
          paddingTop: "15px",
          paddingLeft: matchesSM ? undefined : "5em",
          paddingRight: matchesSM ? undefined : "5em",
          alignItems: "center",
          height: matchesSM ? undefined : "100vh",
        }}
      >
        <Box>
          <Image
            height={matchesSM ? 300 : undefined}
            src={ContactImage}
            alt="Service 24 7"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: matchesSM ? "center" : undefined,
          }}
        >
          <Typography
            variant="h2"
            textAlign={matchesSM ? "center" : undefined}
            color="primary"
          >
            Contact us
          </Typography>
          <Typography
            variant="body1"
            textAlign={matchesSM ? "center" : undefined}
            sx={{
              marginTop: "10px",
              /*  marginRight: matchesSM ? "5px" : undefined,
              marginLeft: matchesSM ? "5px" : undefined, */
              marginBottom: "20px",
              fontSize: matchesSM ? 16 : undefined,
            }}
          >
            Send us a quick message;
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: matchesSM ? 350 : 800,
              gap: 2,
              marginBottom: matchesSM ? "10px" : undefined,
            }}
          >
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              fullWidth
              type="email"
              label="Email *"
              {...getFieldProps("email")}
              onChange={handleChange}
              error={!!!!touched.email && !!errors.email}
              helperText={errors.email}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              fullWidth
              multiline
              minRows={10}
              type="text"
              label="Message *"
              {...getFieldProps("message")}
              onChange={handleChange}
              error={!!!!touched.message && !!errors.message}
              helperText={errors.message}
            />
            <Button
              variant="contained"
              disableRipple
              type="submit"
              sx={{
                fontSize: 18,
                letterSpacing: 2,
                textTransform: "none",
                padding: "5px 20px 5px 20px",
                "&:hover": {
                  background: colors.cerulanBlue[500],
                },
              }}
            >
              Send message
            </Button>
          </Box>

          <Box
            sx={{
              marginTop: matchesSM ? "20px" : "30px",
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <IconButton
              LinkComponent={"a"}
              href="https://www.linkedin.com/company/data-alma/"
              target="_blank"
              rel="no-referrer noreferrer"
              disableRipple
              sx={{
                background: colors.primary[500],
                "&:hover": {
                  background: colors.cerulanBlue[500],
                },
              }}
            >
              <LinkedInIcon
                sx={{
                  fontSize: "30px",
                  color: theme.palette.grey[100],
                }}
              />
            </IconButton>
            <IconButton
              LinkComponent={"a"}
              href="https://twitter.com/data_alma"
              target="_blank"
              rel="no-referrer noreferrer"
              disableRipple
              sx={{
                background: colors.primary[500],
                "&:hover": {
                  background: colors.cerulanBlue[500],
                },
              }}
            >
              <TwitterIcon
                sx={{
                  fontSize: "30px",
                  color: theme.palette.grey[100],
                }}
              />
            </IconButton>
            <IconButton
              LinkComponent={"a"}
              href="mailto:infodatalma@gmail.com"
              target="_blank"
              rel="no-referrer noreferrer"
              disableRipple
              sx={{
                background: colors.primary[500],
                "&:hover": {
                  background: colors.cerulanBlue[500],
                },
              }}
            >
              <EmailIcon
                sx={{
                  fontSize: "30px",
                  color: theme.palette.grey[100],
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Home;
