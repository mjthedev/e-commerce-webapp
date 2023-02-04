import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import "../../css/elements.css";
import data from "./items";
import usePagination from "./Pagination.jsx";
import { Pagination } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateItemData } from "../../features/item/itemSlice";
import { ThemeProvider } from "@mui/material";
import theme from "../../css/material/global";

const Content = () => {
  const storeItem = useSelector((state) => state.item);
  const dispatch = useDispatch();
  let [page, setPage] = useState(1);
  // let [selectedItem, setSelectedItem] = useState("");
  const PER_PAGE = 24;

  const count = Math.ceil(data.length / PER_PAGE);
  const PageData = usePagination(data, PER_PAGE);
  const items = PageData.currentData();

  const handleChange = (e, p) => {
    setPage(p);
    window.scroll({
      top: 650,
    });
    PageData.jump(p);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "auto",
      }}
    >
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        onChange={handleChange}
      />
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
                  to={{
                    pathname: "/Item",
                  }}
                  sx={{
                    color: "black",
                  }}
                  onClick={() => {
                    // console.log(item);
                    // console.log(selectedItem);
                    // setSelectedItem(item);
                    // console.log(selectedItem);
                    dispatch(updateItemData({ ...item }));
                    // console.log(storeItem);
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

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        onChange={handleChange}
      />
    </Grid>
  );
};

export default Content;
