import React, { useState } from "react";
import { TextField, Button, Grid, Card, CardContent } from "@mui/material";

export const Train = () => {
  const [train, setTrain] = useState("");
  const [data, setdata] = useState([]);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              onChange={(e) => setTrain(e.target.value)}
              onc
              label="Type here"
              fullWidth
            >
              gdf
            </TextField>
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={() => setdata([...data, train])}
              variant="contained"
              fullWidth
              sx={{ height: 55 }}
            >
              Submit
            </Button>
          </Grid>

          <Grid item xs={2}>
            <img src="./images/f1.png" alt="" />
          </Grid>
          {data.map((item) => (
            <Grid item xs={item} fullWidth>
              <img src={`./images/f${item}.png`} alt="" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
