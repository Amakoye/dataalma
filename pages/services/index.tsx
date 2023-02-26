import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Services from "../../src/components/pages/services/Services";
import { tokens } from "../../src/utils/theme";

const Index = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery("(max-width:600px)");
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        paddingTop: matchesSM ? undefined : "2.5em",
        height: "100%",
      }}
    >
      <Services />
    </Box>
  );
};

export default Index;
