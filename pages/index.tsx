import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import type { NextPage } from "next";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import AboutImage from "../src/assets/About.png";
import AnalyticsImage from "../src/assets/Analytics.png";
import ApplicationdevImage from "../src/assets/Applicationdev.png";
import ConsultingImage from "../src/assets/Consulting.png";
import DatabasedevImage from "../src/assets/Databasedev.png";
import HeroImage from "../src/assets/HomepageHeroImage.gif";
import ContactImage from "../src/assets/Service_ 24_7.gif";
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
          <Button
            variant="contained"
            disableRipple
            sx={{
              fontSize: matchesSM ? 16 : 18,
              letterSpacing: 2,
              width: matchesSM ? 135 : 155,
              textTransform: "none",
              paddingTop: matchesSM ? undefined : "5px",
              paddingBottom: matchesSM ? undefined : "5px",
              paddingRight: matchesSM ? undefined : "20px",
              paddingLeft: matchesSM ? undefined : "20px",
              "&:hover": {
                background: colors.cerulanBlue[500],
              },
            }}
          >
            Learn more
          </Button>
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: theme.palette.grey[100],
          paddingTop: matchesSM ? "10px" : "30px",
          borderTopLeftRadius: matchesSM ? 20 : 40,
          borderTopRightRadius: matchesSM ? 20 : 40,
        }}
      >
        <Typography variant="h2" textAlign="center" color="primary" mb="20px">
          Services
        </Typography>
        <Grid
          container
          direction="column"
          sx={{
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: matchesSM ? "5px" : "5em",
            paddingLeft: matchesSM ? "5px" : "5em",
          }}
        >
          {/* IT Consulting block */}
          <Grid item>
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  textAlign={matchesSM ? "center" : undefined}
                  color="primary"
                >
                  IT Consulting
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={matchesSM ? "justify" : undefined}
                  style={{
                    marginTop: "10px",
                    fontSize: matchesSM ? 16 : undefined,
                    marginRight: matchesSM ? "5px" : undefined,
                    marginLeft: matchesSM ? "5px" : undefined,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  nemo repellendus excepturi{!matchesSM && <br />}
                  voluptatibus minus explicabo fugiat, consequuntur nulla id
                  nisi cumque quam. Exercitationem{!matchesSM && <br />} ab
                  labore tempore, iste quis eius consequuntur unde voluptatum in
                  aliquam, delectus assumenda? {!matchesSM && <br />} Provident
                  sint quisquam vel temporibus eaque vero reiciendis veritatis
                  possimus exercitationem.
                </Typography>
              </Grid>
              <Grid item>
                <Image height={250} src={ConsultingImage} alt="consulting" />
              </Grid>
            </Grid>
          </Grid>
          {/* Business analytics block */}
          <Grid
            item
            sx={{
              marginTop: matchesSM ? "10px" : "20px",
              marginBottom: "20px",
            }}
          >
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              alignItems={matchesSM ? "center" : undefined}
              justifyContent={matchesSM ? undefined : "flex-end"}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  textAlign={matchesSM ? "center" : undefined}
                  color="primary"
                >
                  Business Analytics
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={matchesSM ? "justify" : undefined}
                  style={{
                    marginTop: "10px",
                    fontSize: matchesSM ? 16 : undefined,
                    marginRight: matchesSM ? "5px" : undefined,
                    marginLeft: matchesSM ? "5px" : undefined,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  nemo repellendus excepturi {!matchesSM && <br />}
                  voluptatibus minus explicabo fugiat, consequuntur nulla id
                  nisi cumque quam. Exercitationem{!matchesSM && <br />}
                  ab labore tempore, iste quis eius consequuntur unde voluptatum
                  in aliquam, delectus assumenda? {!matchesSM && <br />}{" "}
                  Provident sint quisquam vel temporibus eaque vero reiciendis
                  veritatis possimus exercitationem.
                </Typography>
              </Grid>
              <Grid item>
                <Image
                  height={250}
                  src={AnalyticsImage}
                  alt="Business analytics"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Application development block */}
          <Grid item>
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  textAlign={matchesSM ? "center" : undefined}
                  color="primary"
                >
                  Application development
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={matchesSM ? "justify" : undefined}
                  style={{
                    marginTop: "10px",
                    fontSize: matchesSM ? 16 : undefined,
                    marginRight: matchesSM ? "5px" : undefined,
                    marginLeft: matchesSM ? "5px" : undefined,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  nemo repellendus excepturi{!matchesSM && <br />}
                  voluptatibus minus explicabo fugiat, consequuntur nulla id
                  nisi cumque quam. Exercitationem{!matchesSM && <br />}
                  ab labore tempore, iste quis eius consequuntur unde voluptatum
                  in aliquam, delectus assumenda? {!matchesSM && <br />}{" "}
                  Provident sint quisquam vel temporibus eaque vero reiciendis
                  veritatis possimus exercitationem.
                </Typography>
              </Grid>
              <Grid item>
                <Image
                  height={250}
                  src={ApplicationdevImage}
                  alt="application development"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Database development block */}
          <Grid item sx={{ marginTop: "20px" }}>
            <Grid
              container
              direction={matchesSM ? "column" : "row"}
              alignItems={matchesSM ? "center" : undefined}
              justifyContent={matchesSM ? undefined : "flex-end"}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  textAlign={matchesSM ? "center" : undefined}
                  color="primary"
                >
                  Database development
                </Typography>
                <Typography
                  variant="body1"
                  textAlign={matchesSM ? "justify" : undefined}
                  style={{
                    marginTop: "10px",
                    fontSize: matchesSM ? 16 : undefined,
                    marginRight: matchesSM ? "5px" : undefined,
                    marginLeft: matchesSM ? "5px" : undefined,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  nemo repellendus excepturi {!matchesSM && <br />}
                  voluptatibus minus explicabo fugiat, consequuntur nulla id
                  nisi cumque quam. Exercitationem {!matchesSM && <br />}
                  ab labore tempore, iste quis eius consequuntur unde voluptatum
                  in aliquam, delectus assumenda? {!matchesSM && <br />}
                  Provident sint quisquam vel temporibus eaque vero reiciendis
                  veritatis possimus exercitationem.
                </Typography>
              </Grid>
              <Grid item>
                <Image
                  height={250}
                  src={DatabasedevImage}
                  alt="database development"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
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
          height: "80vh",
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
            Data Alma is a technology consultancy company that provides
            data-driven{!matchesSM && <br />} ConsultingImagesolutions to
            companies and businesses by use of machine learning tools.
            {!matchesSM && <br />} We equally offer research services and
            automated cyber security detection {!matchesSM && <br />}
            solutions to businesses.
          </Typography>
          <Button
            variant="contained"
            disableRipple
            sx={{
              fontSize: matchesSM ? 16 : 18,
              letterSpacing: 2,
              width: matchesSM ? 135 : 155,
              textTransform: "none",
              paddingTop: matchesSM ? undefined : "5px",
              paddingBottom: matchesSM ? undefined : "5px",
              paddingRight: matchesSM ? undefined : "20px",
              paddingLeft: matchesSM ? undefined : "20px",
              "&:hover": {
                background: colors.cerulanBlue[500],
              },
            }}
          >
            Learn more
          </Button>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            architecto aliquam recusandae
            {!matchesSM && <br />} molestias deserunt quae repudiandae veniam?
            Animi cupiditate accusamus odit numquam nulla {!matchesSM && <br />}{" "}
            aperiam dolore similiqueaut eos facere deserunt ullam iste omnis
            repellat molestiae.
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
        </Box>
      </Box>
    </Stack>
  );
};

export default Home;
