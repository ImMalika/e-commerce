import { TextField,Button } from "@mui/material";
import React from "react";
import c from "./navbar2.module.scss";
const Search = () => {
  return (
    <div className={c.form}>
      <form onChange={(e) => e.preventDefault()}>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        <Button  className={c.searchicon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </form>
    </div>
  );
};

export default Search;
