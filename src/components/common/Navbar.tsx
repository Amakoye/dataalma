import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { useMediaQuery, useTheme } from "@mui/material";
import logo from "../../assets/logo.png";
import { tokens } from "../../utils/theme";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Navbar(props: Props) {
  const theme = useTheme();
  const router = useRouter();
  const colors = tokens(theme.palette.mode);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Image
        src={logo}
        alt="data alma logo"
        height={50}
        style={{ marginTop: "5px" }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.link} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "20px" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              color="primary"
              sx={{
                fontSize: 35,
              }}
            />
          </IconButton>
          {/* Logo */}
          {!matchesSM && (
            <Box mt={1}>
              <Image src={logo} alt="data alma logo" height={60} />
            </Box>
          )}
          <Hidden smDown>
            <Box
              sx={{
                marginLeft: "auto",
                marginRight: "40px",
                display: "flex",
                gap: 5,
              }}
            >
              {navItems.map((item) => (
                <NextLink
                  href={item.link}
                  passHref
                  key={item.link}
                  style={{
                    textDecoration: "none",
                    color:
                      router.pathname === item.link
                        ? `${colors.cerulanBlue[600]}`
                        : `${colors.primary[500]}`,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: 18,
                      "&:hover": {
                        color: `${colors.cerulanBlue[600]}`,
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                </NextLink>
              ))}
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
