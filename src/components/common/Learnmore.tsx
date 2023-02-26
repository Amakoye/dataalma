import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { tokens } from "../../utils/theme";

type LearnmoreProps = {
  toLink: string;
};

const Learnmore = ({ toLink }: LearnmoreProps) => {
  const router = useRouter();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <NextLink
      href={toLink ?? `${toLink}`}
      passHref
      style={{
        textDecoration: "none",
      }}
    >
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          marginTop: "10px",
          marginBottom: "10px",
          fontSize: "0.85em",
          marginRight: "auto",
          marginLeft: "auto",
          "&:hover": {
            background: colors.cerulanBlue[500],
          },
        }}
        disableRipple
      >
        Learn more
        <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
      </Button>
    </NextLink>
  );
};

export default Learnmore;
