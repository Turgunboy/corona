import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

function Infobox({ title, total, cases }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2>{cases}</h2>
        <Typography color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default Infobox;
