import React from "react";
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
        repudiandae in molestias voluptas ipsam non vel officia impedit deleniti
        repellendus enim aut! Suscipit officia enim dignissimos incidunt quis
        cum impedit!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cum
        incidunt voluptas est nam maxime distinctio sunt dolor dolore dicta,
        fugiat saepe temporibus quia, labore sequi modi. Blanditiis, eaque
        distinctio? 2
      </Typography>
    </div>
  );
};
