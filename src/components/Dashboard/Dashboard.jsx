import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  dashboardBlock: {
    margin: {
      top: 0,
      bottom: 0,
      right: "auto",
      left: "auto",
    },
    width: 253,
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.dashboardBlock}>
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
