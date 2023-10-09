import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

export const Assignment3 = () => {
  const [res, setRes] = useState("esrever");
  const [up, setUp] = useState("PICKUPBIZ");
  const [sq, setSq] = useState(0);
  return (
    <Card
      sx={{
        margin: 16,
        border: "2px solid black",
        width: 1000,
        align: "center",
      }}
    >
      <CardContent>
        <Grid container spacing={2} align="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              {" "}
              Assignment 003
            </Typography>
          </Grid>
          <Grid item xs={8} sx={{ height: 55 }}>
            <TextField
              onChange={(e) => setRes(e.target.value)}
              fullWidth
              label="Reverse Letter"
            />
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ bgcolor: "red", height: 55, color: "white" }}>
              <CardContent>{res.split("").reverse().join("")}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <TextField
              onChange={(e) => setUp(e.target.value)}
              fullWidth
              label="Convert to UpperCase"
            />
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ bgcolor: "red", height: 55, color: "white" }}>
              <CardContent>{up.toUpperCase()}</CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <TextField
              onChange={(e) => setSq(Number(e.target.value))}
              fullWidth
              label="Square of Numbers"
            />
          </Grid>
          <Grid item xs={4} fullWidth>
            <Card sx={{ bgcolor: "red", height: 55, color: "white" }}>
              <CardContent>{sq === 0 ? "X^2" : sq * sq}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
