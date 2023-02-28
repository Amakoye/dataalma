import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { tokens } from "../../../utils/theme";
import { validationSchema } from "../../../utils/utils";

const Contact = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down(769));
  const matchesMD = useMediaQuery(theme.breakpoints.between(769, 1300));
  const colors = tokens(theme.palette.mode);

  const contactOptions = [
    {
      title: "Email",
      icon: (
        <MdOutlineEmail
          style={{
            fontSize: "1.5rem",
            marginBottom: " 0.5rem",
            color: theme.palette.primary.main,
          }}
        />
      ),
      link: "hello@dataalma.com",
    },
    {
      title: "Phone",
      icon: (
        <FiPhone
          style={{
            fontSize: "1.5rem",
            marginBottom: " 0.5rem",
            color: theme.palette.primary.main,
          }}
        />
      ),
      link: "+254 751 086176",
    },
  ];

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
    <Stack
      sx={{
        paddingTop: "15px",
        height: "100%",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2" textAlign="center" color="primary" mt={3} mb={3}>
        Get in touch
      </Typography>

      {/* Contact options and form */}
      <Box
        sx={{
          display: "grid",
          width: matchesMD ? "80%" : "60%",
          gridTemplateColumns: matchesSM ? `1fr` : `1fr 2fr`,
          gap: "2em",
        }}
      >
        {/* Contact options */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2em",
          }}
        >
          {contactOptions.map(({ title, link, icon }, i) => (
            <Box
              key={`${title}-${i}`}
              sx={{
                background: theme.palette.grey[100],
                padding: "1.2rem",
                borderRadius: "1.2rem",
                textAlign: " center",
                border: " 1px solid transparent",
                transition: theme.transitions.create("all 400ms ease"),
                "&:hover": {
                  background: "transparent",
                  borderColor: theme.palette.primary.light,
                },
              }}
            >
              {icon}
              <Typography variant="h4" color="primary" fontWeight={600}>
                {title}
              </Typography>
              <Typography variant="h5" color="primary" fontWeight={600}>
                {link}
              </Typography>
              <a
                style={{
                  marginTop: "0.7rem",
                  display: "inline-block",
                  fontSize: " 1rem",
                }}
                href={title === "Email" ? `mailto:${link}` : "#"}
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </Box>
          ))}
        </Box>
        {/* form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",

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
            size="small"
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
            size="small"
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
      {/* icons */}
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
    </Stack>
  );
};

export default Contact;
