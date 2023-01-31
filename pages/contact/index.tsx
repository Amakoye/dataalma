import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import type { NextPage } from "next";
import Image from "next/image";
import ContactImage from "../../src/assets/Service_ 24_7.gif";
import { tokens } from "../../src/utils/theme";
import { validationSchema } from "../../src/utils/utils";

const Contact: NextPage = () => {
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
    <div>
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
    </div>
  );
};

export default Contact;
