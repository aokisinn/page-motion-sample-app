import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

const NavBar = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Grid container alignItems="center" justify="center">
      <BottomNavigation
        value={value}
        showLabels
        className={classes.root}
        style={{
          width: "100%"
        }}
      >
        <BottomNavigationAction
          label="左"
          icon={<ArrowBack />}
          onClick={() => {
            props.history.push("/left");
          }}
        />
        <BottomNavigationAction
          label="下"
          icon={<ArrowDownward />}
          onClick={() => {
            props.history.push("/under");
          }}
        />
        <BottomNavigationAction
          label="右"
          icon={<ArrowForward />}
          onClick={() => {
            props.history.push("/right");
          }}
        />
      </BottomNavigation>
    </Grid>
  );
};

export default withRouter(NavBar);
