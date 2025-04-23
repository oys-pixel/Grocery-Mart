import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const MyInput = ({ onChange, value }) => {
  return (
    <div className="col-md-6 text-center mx-auto">
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        margin="normal"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default MyInput;
