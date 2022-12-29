import { Grid, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import AnalyticsImage from "../src/assets/Analytics.png";
import ApplicationdevImage from "../src/assets/Applicationdev.png";
import ConsultingImage from "../src/assets/Consulting.png";
import DatabasedevImage from "../src/assets/Databasedev.png";
import HeroImage from "../src/assets/HomepageHeroImage.gif";
import { tokens } from "../src/utils/theme";
const Home: NextPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack direction="column">
      <Box
        sx={{
          display: "flex",
          height: "80vh",
          alignItems: "center",
          background: ` radial-gradient(circle, rgba(213,218,247,1) 0%, rgba(255,255,255,1) 100%, rgba(0,0,0,0) 100%)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
          paddingTop: "20px",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Typography variant="h2" textAlign="center" color="primary">
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
          <Grid item sx={{ marginTop: "20px", marginBottom: "20px" }}>
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
    </Stack>
  );
};

export default Home;
