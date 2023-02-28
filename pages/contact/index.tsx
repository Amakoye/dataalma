import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import type { NextPage } from "next";
import Contact from "../../src/components/pages/contact/Contact";
import { tokens } from "../../src/utils/theme";

const ContactPage: NextPage = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down(769));
  const matchesMD = useMediaQuery(theme.breakpoints.between(769, 1300));
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        paddingTop: "15px",
        height: "100vh",
      }}
    >
      <Contact />
    </Box>
  );
};

export default ContactPage;
