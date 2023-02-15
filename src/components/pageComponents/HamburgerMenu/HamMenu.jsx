import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import "../../../css/navbar.css";
import theme from "../../../css/material/global";
import { useMediaQuery } from "@mui/material";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//search as JSX
const search = (
  <StyledSearch>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Suchen…"
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);

export default function MainNavigation() {
  console.log(theme);
  /*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(false);

  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };
  const matches = useMediaQuery("(min-width:1024px)");

  if (matches) {
    return <></>;
  } else
    return (
      <AppBar
        position="static"
        className="hamburgermenu"
        sx={{ backgroundColor: "#000000" }}
      >
        <Container
          // className="hamburgermenu"
          maxWidth="lg"
          // disableGutters="true"
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: 400,
                paddingLeft: 2,
              }}
            >
              E-commerce
            </Typography>

            <Box
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              {search}
            </Box>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{
                mr: 2,
                display: {
                  xs: "block",
                  sm: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
              //from which side the drawer slides in
              anchor="right"
              //if open is true --> drawer is shown
              open={open}
              //function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              //function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
            >
              {/* The inside of the drawer */}
              <Box
                sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#393939",
                }}
              >
                {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
                <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                  <CloseIcon />
                </IconButton>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2 }}>
                  <ListItemButton>
                    <ListItemText primary="Mens" sx={{ color: "#fff" }} />
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemText primary="Womens" sx={{ color: "#fff" }} />
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemText primary="Kids" sx={{ color: "#fff" }} />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText
                      primary="Young Adults & Teens"
                      sx={{ color: "#fff" }}
                    />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Beauty" sx={{ color: "#fff" }} />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Home" sx={{ color: "#fff" }} />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Activewear" sx={{ color: "#fff" }} />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Designer" sx={{ color: "#fff" }} />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Gift" sx={{ color: "#fff" }} />
                  </ListItemButton>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      m: 1,
                      width: 0.5,
                      backgroundColor: "black",
                      outline: "none",
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      m: 1,
                      width: 0.5,
                      backgroundColor: "black",
                      color: "white",
                      border: "none",
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    );
}
