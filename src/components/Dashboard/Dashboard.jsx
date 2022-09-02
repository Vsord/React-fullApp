import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Dashboard.module.scss";

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}></Box>
);

const Dashboard = () => {
  return (
    <div className={styles.dashboard_block}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Hello World
          </Typography>
          <Typography variant="h5" component="div">
            Hello World 2
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Hello World 3
          </Typography>
          <Typography variant="body2">Hello World 4</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Dashboard;
