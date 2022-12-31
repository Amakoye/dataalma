import { Grid, useTheme } from "@mui/material";
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
          height: "90vh",
          alignItems: "center",
          background: ` radial-gradient(circle, rgba(213,218,247,1) 0%, rgba(255,255,255,1) 100%, rgba(0,0,0,0) 100%)`,
          paddingRight: "5em",
          paddingLeft: "5em",
          gap: 20,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            color="primary"
            sx={{ fontSize: 50, fontWeight: "bold", letterSpacing: 10 }}
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
            sx={{
              marginBottom: 2,
            }}
          >
            Using data to create insights and cybersecurity services for the
            success of businesses.
            <br />
            We provide data-driven solutions to companies and businesses by use
            of machine learning <br /> tools. We equally offer research services
            and automated cyber security detection solutions <br /> to
            businesses.
          </Typography>
          <Button
            variant="contained"
            disableRipple
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
            Learn more
          </Button>
        </Box>

        <Box>
          <Image
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
          paddingTop: "30px",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Typography variant="h2" textAlign="center" color="primary" mb="20px">
          Services
        </Typography>
        <Grid container direction="column" sx={{ padding: "0 5em 0 5em" }}>
          {/* IT Consulting block */}
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <Typography variant="h4" color="primary">
                  IT Consulting
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  nemo repellendus excepturi <br />
                  voluptatibus minus explicabo fugiat, consequuntur nulla id
                  nisi cumque quam. Exercitationem <br />
                  ab labore tempore, iste quis eius consequuntur unde voluptatum
                  in aliquam, delectus assumenda? <br /> Provident sint quisquam
                  vel temporibus eaque vero reiciendis veritatis possimus
                  exercitationem.
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
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Grid container direction="row" justifyContent="flex-end">
              <Grid item>
                <Typography variant="h4" color="primary">
                  Business Analytics
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  nemo repellendus excepturi <br />
                  voluptatibus minus explicabo fugiat, consequuntur nulla id
                  nisi cumque quam. Exercitationem <br />
                  ab labore tempore, iste quis eius consequuntur unde voluptatum
                  in aliquam, delectus assumenda? <br /> Provident sint quisquam
                  vel temporibus eaque vero reiciendis veritatis possimus
                  exercitationem.
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
            <Grid container direction="row">
              <Grid item>
                <Typography variant="h4" color="primary">
                  Application development
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  nemo repellendus excepturi <br />
                  voluptatibus minus explicabo fugiat, consequuntur nulla id
                  nisi cumque quam. Exercitationem <br />
                  ab labore tempore, iste quis eius consequuntur unde voluptatum
                  in aliquam, delectus assumenda? <br /> Provident sint quisquam
                  vel temporibus eaque vero reiciendis veritatis possimus
                  exercitationem.
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
            <Grid container direction="row" justifyContent="flex-end">
              <Grid item>
                <Typography variant="h4" color="primary">
                  Database development
                </Typography>
                <Typography
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  nemo repellendus excepturi <br />
                  voluptatibus minus explicabo fugiat, consequuntur nulla id
                  nisi cumque quam. Exercitationem <br />
                  ab labore tempore, iste quis eius consequuntur unde voluptatum
                  in aliquam, delectus assumenda? <br /> Provident sint quisquam
                  vel temporibus eaque vero reiciendis veritatis possimus
                  exercitationem.
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
          paddingTop: "15px",
          paddingLeft: "5em",
          paddingRight: "5em",
          background: colors.peranoBlue[100],
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Box>
          <Typography variant="h2" color="primary">
            About us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
            }}
          >
            Data Alma is a technology consultancy company that provides
            data-driven
            <br /> solutions to companies and businesses by use of machine
            learning tools.
            <br /> We equally offer research services and automated cyber
            security detection <br />
            solutions to businesses.
          </Typography>
          <Button
            variant="contained"
            disableRipple
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
            Learn more
          </Button>
        </Box>

        <Box>
          <Image
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
          justifyContent: "space-between",
          paddingTop: "15px",
          paddingLeft: "5em",
          paddingRight: "5em",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Image src={ContactImage} alt="Service 24 7" />
        </Box>
        <Box>
          <Typography variant="h2" color="primary">
            Contact us
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "10px", marginBottom: "20px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            architecto aliquam recusandae
            <br /> molestias deserunt quae repudiandae veniam? Animi cupiditate
            accusamus odit numquam nulla <br /> aperiam dolore similiqueaut eos
            facere deserunt ullam iste omnis repellat molestiae.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 800,
              gap: 2,
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
