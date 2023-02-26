/* eslint-disable react/no-unescaped-entities */
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import { tokens } from "../../../utils/theme";
import AiImage from "../../assets/Ai.png";
import AnalyticsImage from "../../assets/Analytics.png";
import ApplicationdevImage from "../../assets/Applicationdev.png";
import ConsultingImage from "../../assets/Consulting.png";
import DatabasedevImage from "../../assets/Databasedev.png";
import ResearchImage from "../../assets/Research.png";
import Learnmore from "../../common/Learnmore";

const Services = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = tokens(theme.palette.mode);
  const router = useRouter();
  const servicesRoute = router.pathname === "/services";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: servicesRoute ? "20px" : undefined,
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
        {/* Digital privacy and Protection block */}
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
                Digital privacy and protection
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
                We specialize in protecting the privacy and digital security of
                marginalized and minority communities. Our
                {!matchesSM && <br />}team of experts has extensive experience
                in identifying and mitigating cyber threats that
                disproportionately {!matchesSM && <br />} affect marginalized
                communities, such as online harassment, hate speech, and
                targeted attacks.
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
                We understand that marginalized communities often face unique
                and disproportionate risks in the digital
                {!matchesSM && <br />}world and that traditional cybersecurity
                solutions may not be sufficient to protect them. Our team is
                commi- {!matchesSM && <br />}-tted to providing customized and
                comprehensive security solutions that address the specific needs
                and {!matchesSM && <br />} concerns of marginalized communities.
              </Typography>
              {servicesRoute && (
                <>
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
                    Our services include privacy and security assessments,
                    digital security trainings, and incident response.
                    {!matchesSM && <br />} We also provide education and
                    awareness programs to help marginalized communities
                    understand the
                    {!matchesSM && <br />}risks they face online and how to
                    protect themselves. <br />
                    In addition, we work closely with community-based
                    organizations, NGOs, and other groups that serve
                    {!matchesSM && <br />} marginalized communities to provide
                    capacity-building programs and resources to help them better
                    {!matchesSM && <br />}
                    understand and address digital security concerns.
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
                    At Data Alma, we believe that everyone has the right to
                    privacy and security online, and we are dedicated
                    {!matchesSM && <br />} to ensuring that marginalized
                    communities have the resources and support they need to stay
                    safe and secure{!matchesSM && <br />} online. Contact us
                    today to learn more about how our services can help protect
                    the privacy and digital security{!matchesSM && <br />} of
                    marginalized communities.
                  </Typography>
                </>
              )}
              {!servicesRoute && <Learnmore toLink="/services" />}
            </Grid>
            <Grid item sx={{ marginLeft: matchesSM ? undefined : "10px" }}>
              <Image
                height={matchesSM ? 250 : servicesRoute ? 600 : 350}
                src={ConsultingImage}
                alt="consulting"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Cyber Security consultancy block */}
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
                Cyber security consultancy
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
                Welcome to our company, a leading provider of cybersecurity
                consultancy services. {!matchesSM && <br />} We are a team of
                experienced cybersecurity experts who are dedicated to helping
                {!matchesSM && <br />}
                organizations of all sizes protect their sensitive information
                and maintain compliance {!matchesSM && <br />} with industry
                regulations. Our consultancy services include risk assessments,
                {!matchesSM && <br />}
                penetration testing, incident response, and compliance
                consulting.
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
                We provide our clients with a clear understanding of their
                cybersecurity posture and {!matchesSM && <br />} recommend
                practical, cost-effective solutions to mitigate identified
                risks. Our team stays{!matchesSM && <br />} up-to-date with the
                latest industry trends and threats, and we work closely with
                clients to {!matchesSM && <br />}ensure that their security
                measures are effective and in line with industry best practices.
                {!matchesSM && <br />}
                Contact us today to learn more about how we can help you protect
                your organization from {!matchesSM && <br />}cyber threats.
              </Typography>
            </Grid>
            <Grid item alignSelf={matchesSM ? undefined : "center"}>
              <Image
                height={matchesSM ? 250 : 350}
                src={AnalyticsImage}
                alt="Business analytics"
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Data privacy services block */}
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
                Data privacy services
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
                At Data Alma, we are dedicated to protecting your organization's
                privacy and security. We {!matchesSM && <br />}specialize in
                providing a wide range of services, including Information
                Security Management {!matchesSM && <br />} Systems (ISMS)
                implementation, as well as privacy and data protection
                consulting. Our team {!matchesSM && <br />}of experts has
                extensive experience in identifying and mitigating risks, and we
                are dedicated{!matchesSM && <br />} to helping organizations of
                all sizes achieve compliance with regulatory requirements such
                as{!matchesSM && <br />} ISO 27001, GDPR, and HIPAA.
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
                We offer a range of services, including risk assessments, gap
                analysis, policy development, {!matchesSM && <br />}and
                implementation support. We understand that every organization is
                unique, and we work{!matchesSM && <br />} closely with our
                clients to develop customized solutions that meet their specific
                needs. Contact {!matchesSM && <br />} us to learn more about our
                services and how we can help you protect your organization's{" "}
                {!matchesSM && <br />}sensitive information and maintain
                compliance with industry regulations.
              </Typography>
            </Grid>
            <Grid item>
              <Image
                height={matchesSM ? 250 : 450}
                src={ApplicationdevImage}
                alt="Data privacy services"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Digital security training block */}
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
                Digital security training
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
                Welcome to our company, where we specialize in providing
                top-notch cybersecurity services and {!matchesSM && <br />}
                training to keep your business secure in today's digital age.
                Our team of experts has extensive {!matchesSM && <br />}
                experience in identifying and mitigating cyber threats,
                including malware, phishing, and other forms
                {!matchesSM && <br />}of cyber attacks.
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
                We offer a wide range of services, including threat management,
                incident response, penetration testing, {!matchesSM && <br />}
                and compliance consulting. Additionally, we offer comprehensive
                training programs to educate your staff {!matchesSM && <br />}
                on best practices for maintaining a secure network and
                preventing cyber attacks. <br />
                Protecting your business from cyber threats has never been more
                important, and we are here to help. {!matchesSM && <br />}
                Contact us to learn more about our services and how we can help
                keep your business secure.
              </Typography>
            </Grid>
            <Grid item>
              <Image
                height={matchesSM ? 250 : 400}
                src={DatabasedevImage}
                alt="Digital security training"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Cyber Security solutions using AI block */}
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
                Cyber Security solutions using AI
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
                At Data Alma, we are revolutionizing the way organizations
                protect themselves against cyber threats.{!matchesSM && <br />}
                We use artificial intelligence (AI) and machine learning (ML) to
                provide advanced cybersecurity services {!matchesSM && <br />}to
                businesses of all sizes. Our team of experts has extensive
                experience in the field of cybersecurity{!matchesSM && <br />}
                and is dedicated to helping organizations stay ahead of the
                constantly evolving threat landscape.
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
                Our AI-based solutions are designed to detect and respond to
                threats in real time, providing a proactive
                {!matchesSM && <br />}approach to cybersecurity. Our advanced
                threat detection algorithms can identify even the most
                sophisticated{!matchesSM && <br />} cyber attacks, and our
                incident response team is available 24/7 to provide immediate
                support in the event{!matchesSM && <br />} of a security
                incident.
              </Typography>
              {servicesRoute && (
                <>
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
                    In addition to our advanced threat detection and response
                    capabilities, we also offer a range of other services,
                    {!matchesSM && <br />}
                    including vulnerability management, penetration testing, and
                    compliance consulting. Our goal is to provide a
                    {!matchesSM && <br />}
                    comprehensive security solution that addresses all aspects
                    of cybersecurity, from prevention to detection
                    {!matchesSM && <br />}and response.
                    <br />
                    At Data Alma, we understand that every organization is
                    unique, and we work closely with our clients to
                    {!matchesSM && <br />}understand their specific needs and
                    develop customized solutions to meet those needs. Contact us
                    today {!matchesSM && <br />}to learn more about how we can
                    help you protect your organization against cyber threats
                    using the power of AI.
                  </Typography>
                </>
              )}
              {!servicesRoute && <Learnmore toLink="/services" />}
            </Grid>
            <Grid item>
              <Image
                height={matchesSM ? 250 : servicesRoute ? 550 : 350}
                src={AiImage}
                alt="Data privacy services"
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Technology research block */}
        <Grid item sx={{ marginTop: "40px" }}>
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
                Technology research
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
                We offer cutting-edge research services relating to
                cybersecurity and artificial intelligence (AI). Our team
                {!matchesSM && <br />}of experts has extensive experience in
                these fields and is dedicated to helping organizations stay
                ahead{!matchesSM && <br />} of the constantly evolving threat
                landscape and the latest advancements in AI technology.
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
                We offer a wide range of research services, including threat
                intelligence, vulnerability assessments, and
                {!matchesSM && <br />} market analysis. Our research is designed
                to provide organizations with a deep understanding of the
                {!matchesSM && <br />}
                current cybersecurity landscape and the latest trends in AI
                technology, allowing them to make informed{!matchesSM && <br />}
                decisions about their security strategies and investments.
              </Typography>
              {servicesRoute && (
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
                  Our team of researchers and analysts use a variety of
                  techniques and tools to gather and analyze data,
                  {!matchesSM && <br />} including machine learning, data
                  mining, and statistical analysis. We also conduct primary
                  research, such {!matchesSM && <br />}as interviews and
                  surveys, to gather insights from industry experts and
                  practitioners. <br /> At Data Alma, we understand that every
                  organization is unique and that their research needs may vary.
                  We {!matchesSM && <br />}work closely with our clients to
                  understand their specific requirements and tailor our research
                  services to {!matchesSM && <br />}meet those needs. Contact us
                  today to learn more about how our research services can help
                  your organization {!matchesSM && <br />}stay ahead of the
                  curve in the fields of cybersecurity and AI.
                </Typography>
              )}
              {!servicesRoute && <Learnmore toLink="/services" />}
            </Grid>
            <Grid item>
              <Image
                height={matchesSM ? 250 : servicesRoute ? 500 : 350}
                src={ResearchImage}
                alt="Digital security training"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
