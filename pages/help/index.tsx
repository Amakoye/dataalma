import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NextPage } from "next";
import NextLink from "../../src/components/common/NextLink";
import { tokens } from "../../src/utils/theme";

const HelpPage: NextPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matchesSM = useMediaQuery(theme.breakpoints.down(769));
  const matchesMD = useMediaQuery(theme.breakpoints.between(768, 1500));
  return (
    <RootStyles sx={{ background: colors.peranoBlue[100] }}>
      <Box
        sx={{
          width: matchesSM ? "95%" : matchesMD ? "85%" : "60%",
          background: colors.peranoBlue[100],
          boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`,
          backdropFilter: `blur(1em)`,
          WebkitBackdropFilter: `blur(1em)`,
          padding: "1em",
          borderRadius: "0.5em",
          textAlign: "justify",
          margin: 0,
        }}
      >
        <Typography variant="h2" textAlign="center" color="primary" mb={2}>
          Need a hand?
        </Typography>
        <TextParagraph variant="body2">
          The world of Activism is sometimes tough and lonely. Human rights
          defenders need support to accomplish some tasks. At Data Alma we
          equally support Human Rights Defenders by offering security hardening
          services to their systems, applications and individual devices.We also
          offer digital awareness and security training to them and their
          organizations.
        </TextParagraph>
        <TextParagraph variant="body2">
          If they (HRDs) need extra/customized support, to enable them to
          accomplish their activism tasks, advise them to apply to Defend
          Defenders through the application link here{" "}
          <NextLink href="https://lnkd.in/ehPznguH" passHref>
            <span>(Web Chat).</span>
          </NextLink>
        </TextParagraph>
        <TextParagraph variant="body2">
          HRDs can also reach out to the Defend Defenders organisation via
          Whatsapp Number: Signal/ WhatsApp: +256393252310, or
          Email: help[@]defenddefenders.org.
        </TextParagraph>
      </Box>
    </RootStyles>
  );
};

const RootStyles = styled(
  Stack,
  {}
)(({ theme }) => ({
  height: "100vh",
  display: "grid",
  placeItems: "center",
}));

const TextParagraph = styled(
  Typography,
  {}
)(({}) => ({
  fontSize: "1rem",
  lineHeight: 1.6,
  marginTop: "0.5em",
  marginBottom: "0.5em",
}));

export default HelpPage;
