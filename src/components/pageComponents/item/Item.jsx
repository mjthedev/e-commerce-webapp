import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faShoppingBag,
  faGift,
  faEnvelope,
  faSackDollar,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { CheckBox, CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./item.css";
import { useTheme } from "@mui/material/styles";

const ItemPage = () => {
  const theme = useTheme();
  console.log(theme);

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
                width: 450,
                height: 614,
                border: "solid",
                fontFamily: "Brandon",
              }}
            >
              <h4>{item.details}</h4>
              <h6>{item.brand}</h6>
              <h5>{item.description}</h5>
              <h3>$ {item.price}</h3>
              <CheckBoxOutlineBlankOutlined disabled />{" "}
              <h3>
                Free Pickup at <br /> Ecommerce Cherry Creek Shopping Center and
                8 <br /> more locations
              </h3>
              <h3>Arrives in store Sat, Feb 04–Fri, Feb 10</h3>
              <Link to={"#"}>
                <FontAwesomeIcon icon={faCar} />
                Curbside Pickup
              </Link>
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
            </Item>
          </Grid>
          <Grid
            sx={{
              gap: "50px",
              outline: "none",
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
                <h2>SIZE INFO</h2>
                <ul
                  style={{
                    padding: 20,
                  }}
                >
                  <li>{item.size}</li>
                  <li>{item.color}</li>
                </ul>
                <h2>DETAILS & CARE</h2>
                <h5>{item.description}</h5>
                <ul
                  style={{
                    padding: 20,
                  }}
                >
                  <li>{item.packaging}</li>
                  <li>{item.fabric}</li>
                  <li>{item.washinstructions}</li>
                  <li>{item.origin}</li>
                  <li>Item #{item.sku}</li>
                </ul>
                <h3>
                  Free Shipping & Returns <Link to={"#"}>See more</Link>
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
                <h2>
                  <FontAwesomeIcon style={{ paddingRight: 10 }} icon={faGift} />
                  GIFT OPTIONS
                </h2>
                <h4>
                  Choose your gift options at Checkout. Some items may not be
                  eligible for all gift options
                </h4>

                <h4>Delivery</h4>

                <ul style={{ listStyle: "none", padding: 10 }}>
                  <li>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
                      icon={faEnvelope}
                    />{" "}
                    Email gift message &#40;free&#41;
                  </li>
                  <li>
                    <FontAwesomeIcon
                      style={{ paddingRight: 10 }}
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

                <h3>
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
              <Typography variant="poster">Comments</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ItemPage;
