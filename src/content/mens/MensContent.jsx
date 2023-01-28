import * as React from "react";
import { MensMenu } from "../../components/pageComponents/Menus/MensMenu";
import { Pagination } from "@mui/material";
import Content from "./Shirts";

export default function MensContent() {
  return (
    <>
      <MensMenu />
      <Content />
      <Pagination count={100} variant="outlined" />
    </>
  );
}
