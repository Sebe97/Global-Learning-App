import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { NavigateNextOutlined } from "@mui/icons-material";
import CardComponent from "./Components/CardComponent";
// import makeStyles from "@mui/styles/makeStyles";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

const MUIGrid = () => {
  //   const classes = useStyles();

  return (
    <Grid container spacing={3} sx={{ margin: "10px" }}>
      <Grid item xs={12} sm={6} md={6}>
        <CardComponent />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Send
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" endIcon={<NavigateNextOutlined />}>
              Next
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Informations
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small" startIcon={<InfoIcon />}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MUIGrid;
