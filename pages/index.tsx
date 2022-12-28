import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Image from "next/image";
import HeroImage from "../src/assets/HomepageHeroImage.gif";
import { tokens } from "../src/utils/theme";

const Home: NextPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "flex",
        height: "80vh",
        alignItems: "center",
        marginRight: "5em",
        marginLeft: "5em",
        gap: 10,
      }}
    >
      <Box>
        <Typography
          variant="h1"
          color="primary"
          sx={{ fontSize: 50, fontWeight: "bold", letterSpacing: 10 }}
        >
          Data Alma.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: 18,
            fontWeight: 300,
            lineHeight: 2,
            color: colors.grey[500],
            marginBottom: 2,
          }}
        >
          Using data to create insights and cybersecurity services for the
          success of businesses.
          <br />
          We provide data-driven solutions to companies and businesses by use of
          machine learning <br /> tools. We equally offer research services and
          automated cyber security detection solutions <br /> to businesses.
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "none",
            padding: "5px 20px 5px 20px",
          }}
        >
          Learn more
        </Button>
      </Box>
      <Box>
        {/*  <Image src={HeroImage} alt="Digital presentation" /> */}
        <Image src={HeroImage} alt="Digital presentation" />
      </Box>
    </Box>
  );
};

export default Home;
