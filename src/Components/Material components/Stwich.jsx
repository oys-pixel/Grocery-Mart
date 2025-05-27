import * as React from "react";
import Switch from "@mui/joy/Switch";

import Typography from "@mui/joy/Typography";

function Stwich() {
  return (
    <Switch
      slotProps={{
        track: {
          children: (
            <React.Fragment>
              <Typography
                component="span"
                level="inherit"
                sx={{ ml: "10px", my: "auto" }}
              >
                On
              </Typography>
              <Typography component="span" level="inherit" sx={{ mr: "8px" }}>
                Off
              </Typography>
            </React.Fragment>
          ),
        },
      }}
      sx={{
        "--Switch-thumbSize": "26px",
        "--Switch-trackWidth": "64px",
        "--Switch-trackHeight": "30px",
      }}
    />
  );
}

export default Stwich;
