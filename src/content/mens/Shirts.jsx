import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import "../../css/elements.css";
import items from "./items";

const Content = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "auto",
      }}
    >
      <Grid item>
        <Grid container justifyContent="center" spacing={2}>
          {items.map((item) => (
            <Grid key={item.id} item xs={12} sm={3}>
              <Paper
                sx={{
                  width: 250,
                  height: 500,
                  padding: 2,
                }}
              >
                <img src={item.img} alt="" />
                <br />
                <br />
                <h3>
                  {" "}
                  <strong>{item.brand}</strong>{" "}
                </h3>
                <Link
                  href="#"
                  underline="none"
                  className="card-detail"
                  sx={{
                    color: "black",
                  }}
                >
                  {item.details}
                </Link>
                <br />
                <br />
                <h4>${item.price}</h4>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
