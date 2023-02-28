/* eslint-disable react/no-unescaped-entities */
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import AboutImage from "../../src/assets/About.png";
import { tokens } from "../../src/utils/theme";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const matchesSM = useMediaQuery(theme.breakpoints.down(769));
  const matchesMD = useMediaQuery(theme.breakpoints.between(768, 1500));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: matchesSM ? "column" : "row",
        paddingTop: "15px",
        paddingBottom: "40px",
        paddingLeft: matchesSM ? undefined : "5em",
        paddingRight: matchesSM ? undefined : "5em",
        background: colors.peranoBlue[100],
        alignItems: "center",
        height: matchesSM ? "100%" : "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: matchesSM ? "center" : undefined,
          textAlign: "justify",
        }}
      >
        <Typography
          variant="h2"
          color="primary"
          textAlign={matchesSM ? "center" : undefined}
          mt={5}
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
          IT-related services including business analytics, data protection and
          privacy services, network design and implementation, cloud solutions,
          cybersecurity, and project management. We have a team of experienced
          professionals who work closely with clients to understand their unique
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
          learning and natural language processing, to help clients gain a
          deeper understanding of their customers, markets, and operations. They
          help businesses increase revenue, improve efficiency, and gain a
          competitive advantage.
        </Typography>
        <Typography
          variant="body1"
          textAlign={matchesSM ? "center" : undefined}
          sx={{
            marginBottom: 2,
            fontSize: matchesSM ? 16 : undefined,
          }}
        >
          Data Alma is not only dedicated to providing their clients with the
          most innovative and accurate analytics and secure solutions on the
          market but also offer ongoing support and maintenance to ensure that
          our clients' systems are always up-to-date and running smoothly.
        </Typography>
      </Box>
      {!matchesMD && (
        <Box>
          <Image
            height={matchesSM ? 300 : undefined}
            style={{ borderRadius: "50%" }}
            src={AboutImage}
            alt="Digital presentation"
          />
        </Box>
      )}
    </Box>
  );
};

export default About;
