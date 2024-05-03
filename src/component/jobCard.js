import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const jobCard = () => {
  return (
    <>
      <div>
        <SearchIcon />
        <TextField variant="outlined-basic"></TextField>
      </div>
    </>
  );
};

export default jobCard;
