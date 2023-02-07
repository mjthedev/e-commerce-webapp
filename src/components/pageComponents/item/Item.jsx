import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Checkbox, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faShoppingBag,
  faGift,
  faEnvelope,
  faSackDollar,
  faBoxOpen,
  faTruckFast,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { CheckBox, CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./item.css";
import { useTheme } from "@mui/material/styles";
import { createTheme } from "@mui/system";
import { fontSize } from "@mui/system";

const ItemPage = () => {
  const theme = useTheme();
  console.log(theme);

  const itemPageTheme = createTheme({
    typography: {
      posterDetails: {
        fontSize: "1.625rem",
        color: "#393939",
      },
    },
  });
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "start",
    gap: "100px",
    boxShadow: "none",
    color: theme.palette.text.secondary,
  }));

  // figure out why the state is rendering nested
  const item = useSelector((state) => state.item.item);
  const dispatch = useDispatch();

  const [size, setSize] = React.useState("");

  //   console.log("from item component:", item);
  return (
    <>
      <Box sx={{ flexGrow: 1, border: "none" }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Item
              sx={{
                width: 450,
                height: 614,
                border: "solid",
              }}
            >
              <img src={item.img} style={{ width: 450, height: 614 }} alt="" />
            </Item>
          </Grid>
          <Grid
            sx={{
              alignContent: "start",
            }}
            xs={4}
          >
            <Item
              sx={{
                width: "100%",
                height: "100%",
                border: "solid",
              }}
            >
              <h4
                style={{
                  fontSize: "1.625rem",
                  fontWeight: 500,
                  color: "#393939",
                  marginBottom: 5,
                }}
              >
                {item.details}
              </h4>
              <h6
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#393939",
                  marginBottom: 5,
                }}
              >
                {item.brand}
              </h6>
              <h5
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#393939",
                  marginBottom: 30,
                }}
              >
                {item.fit}
              </h5>
              <h3
                style={{
                  fontSize: "1.188rem",
                  fontWeight: 600,
                  color: "#393939",
                  marginBottom: 5,
                }}
              >
                $ {item.price}
              </h3>
              <h4
                style={{
                  marginBottom: 30,
                }}
              >
                <FontAwesomeIcon icon={faTruckFast} /> FREE SHIPPING
              </h4>
              <h5
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  marginBottom: 20,
                }}
              >
                or 4 interest-free payments of $15.00 with{" "}
                <strong>afterpay</strong>
              </h5>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#393939",
                  marginBottom: 20,
                }}
              >
                Get a $60 Bonus Note when you use a new Nordstrom credit card.
                Apply now
              </h4>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#393939",
                  marginBottom: 20,
                }}
              >
                {item.fabricDescription}
              </h4>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{
                      borderRadius: 0,
                    }}
                    value={size}
                    label="Size"
                    onChange={""}
                  >
                    <MenuItem value={"Small"}>Small</MenuItem>
                    <MenuItem value={"Meduim"}>Medium</MenuItem>
                    <MenuItem value={"Large"}>Large</MenuItem>
                    <MenuItem value={"XL"}>XL</MenuItem>
                    <MenuItem value={"2XL"}>2XL</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{
                      borderRadius: 0,
                      marginTop: 20,
                      marginBottom: 20,
                    }}
                    value={size}
                    label="Size"
                    onChange={""}
                  >
                    <MenuItem value={"White/Black"}>White/Black</MenuItem>
                    <MenuItem value={"Cocao Wow/ Cocao Wow/ White"}>
                      Cocao Wow/ Cocao Wow/ White
                    </MenuItem>
                    <MenuItem value={"Rough Green/Rough Green/White"}>
                      Rough Green/Rough Green/White
                    </MenuItem>
                    <MenuItem value={"Aligator/ White"}>
                      Aligator/ White
                    </MenuItem>
                    <MenuItem value={"Cave Purple/White"}>
                      Cave Purple/White
                    </MenuItem>
                    <MenuItem value={"Court Purple/White"}>
                      Court Purple/White
                    </MenuItem>
                    <MenuItem value={"Unred/ White"}>Unred/ White</MenuItem>
                    <MenuItem value={"Wheat Gold/Wheat Gold/White"}>
                      Wheat Gold/Wheat Gold/White
                    </MenuItem>
                    <MenuItem value={"Char H/White"}>Char H/White</MenuItem>
                    <MenuItem value={"Black/White"}>Black/White</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Grid container xs={12}>
                <Grid xs={1.5}>
                  {" "}
                  <Item>
                    <Checkbox sx={{ padding: 0 }} />
                  </Item>
                </Grid>
                <Grid xs={10}>
                  {" "}
                  <Item sx={{ lineHeight: 1.6 }}>
                    <h3 style={{ fontSize: "1rem", color: "#393939" }}>
                      Free Pickup at <br />
                      Ecommerce Cherry Creek Shopping Center and 8 <br /> more
                      locations
                    </h3>
                    <h3
                      style={{
                        fontWeight: 400,
                        color: "#393939",
                        marginBottom: 10,
                      }}
                    >
                      Select a size to see if it’s available for pickup.
                    </h3>
                    <Link style={{ textDecoration: "none" }} to={"#"}>
                      <FontAwesomeIcon
                        style={{ marginRight: 10 }}
                        icon={faCar}
                      />
                      Curbside Pickup
                    </Link>
                  </Item>
                </Grid>
              </Grid>

              <Grid container xs={12}>
                <Grid xs={1.5}>
                  {" "}
                  <Item>
                    <Checkbox defaultChecked sx={{ padding: 0 }} />
                  </Item>
                </Grid>
                <Grid xs={10}>
                  {" "}
                  <Item sx={{ lineHeight: 1.6 }}>
                    <h3 style={{ fontSize: "1rem", color: "#393939" }}>
                      Free Shipping to 80211
                    </h3>
                    <h3
                      style={{
                        fontWeight: 400,
                        color: "#393939",
                        marginBottom: 10,
                      }}
                    >
                      Select a size to see when it will arrive.
                    </h3>
                  </Item>
                </Grid>
              </Grid>

              <Button
                sx={{
                  width: "100%",
                  bgcolor: "black",
                  borderRadius: 0,
                  color: "white",
                  height: 50,
                  ":hover": {
                    bgcolor: "gray",
                  },
                }}
                onClick={() => {
                  console.log("added to cart :", item);
                }}
              >
                <FontAwesomeIcon
                  style={{ paddingRight: "20px" }}
                  icon={faShoppingBag}
                  size="lg"
                />
                ADD TO BAG
              </Button>
              <div style={{ marginTop: 10 }}>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    paddingTop: 20,
                  }}
                  to={""}
                >
                  <FontAwesomeIcon style={{ marginRight: 5 }} icon={faPlus} />
                  Add to Wish List
                </Link>
              </div>
            </Item>
          </Grid>
          <Grid
            sx={{
              gap: "100px",
              outline: "none",
              padding: 10,
            }}
            container
            xs={8}
          >
            <Grid xs={4}>
              <Item
                sx={{
                  width: 378.48,
                  height: 681,
                }}
              >
                <h2 style={{ color: "#393939" }}>SIZE INFO</h2>
                <ul
                  style={{
                    padding: 20,
                    color: "#393939",
                  }}
                >
                  <li>{item.size}</li>
                  <li>{item.color}</li>
                </ul>
                <h2 style={{ marginBottom: 10, color: "#393939" }}>
                  DETAILS & CARE
                </h2>
                <h5
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#393939",
                  }}
                >
                  {item.description}
                </h5>
                <ul
                  style={{
                    padding: 20,
                    color: "#393939",
                    fontSize: "1rem",
                    lineHeight: 2,
                  }}
                >
                  <li>{item.packaging}</li>
                  <li>{item.fabric}</li>
                  <li>{item.washinstructions}</li>
                  <li>{item.origin}</li>
                  <li>Item #{item.sku}</li>
                </ul>
                <h3 style={{ fontWeight: 700, color: "#393939" }}>
                  Free Shipping & Returns{" "}
                  <Link
                    style={{ fontWeight: 300, textDecoration: "none" }}
                    to={"#"}
                  >
                    See more
                  </Link>
                </h3>
              </Item>
            </Grid>
            <Grid sx={{}} xs={4}>
              <Item
                sx={{
                  width: 378.48,
                  height: 681,
                }}
              >
                <h2 style={{ color: "#393939", marginBottom: 10 }}>
                  <FontAwesomeIcon style={{ paddingRight: 10 }} icon={faGift} />
                  GIFT OPTIONS
                </h2>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#393939",
                  }}
                >
                  Choose your gift options at Checkout. Some items may not be
                  eligible for all gift options
                </h4>

                <h4
                  style={{
                    marginTop: 10,
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#393939",
                  }}
                >
                  Free Pickup
                </h4>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 10,
                    lineHeight: 2,
                    color: "#393939",
                  }}
                >
                  <li>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      icon={faEnvelope}
                    />{" "}
                    Email gift message &#40;free&#41;
                  </li>
                  <li>
                    <FontAwesomeIcon
                      style={{ paddingRight: 13 }}
                      icon={faSackDollar}
                    />
                    Fabric gift bag &#40;$5&#41;
                  </li>
                  <li>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      icon={faBoxOpen}
                    />
                    DIY Nordstrom gift box &#40;$5&#41;
                  </li>
                </ul>
                <h4
                  style={{
                    marginTop: 10,
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#393939",
                  }}
                >
                  Delivery
                </h4>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 10,
                    lineHeight: 2,
                    color: "#393939",
                  }}
                >
                  <li>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      icon={faEnvelope}
                    />{" "}
                    Email gift message &#40;free&#41;
                  </li>
                  <li>
                    <FontAwesomeIcon
                      style={{ paddingRight: 13 }}
                      icon={faSackDollar}
                    />
                    Fabric gift bag &#40;$5&#41;
                  </li>
                  <li>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      icon={faBoxOpen}
                    />
                    DIY Nordstrom gift box &#40;$5&#41;
                  </li>
                </ul>

                <h3 style={{ marginBottom: 20, color: "#393939" }}>
                  Need help finding the perfect gift? We've got you covered.
                </h3>
                <Button
                  style={{
                    border: "solid",
                    borderRadius: 0,
                    color: "black",
                    ":hover": {
                      bgcolor: "white",
                    },
                  }}
                >
                  SHOP GIFTS
                </Button>
              </Item>
            </Grid>
          </Grid>
          <Grid
            sx={{
              border: "solid",
            }}
            xs={8}
          >
            <Item>
              <Typography variant="posterDetails" theme={itemPageTheme}>
                Comments
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ItemPage;
