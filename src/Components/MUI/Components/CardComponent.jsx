import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { NavigateNextOutlined, TextFields } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

// cu useStyles adaug calse custom elementelor, deci nu ma mai folosesc de
// culorile default ale clasei
// Deasemenea pot suprascrie diverse culori din thema material-ui
const useStyles = makeStyles({
  title: {
    backgroundColor: "yellow",
    padding: 40,
    "&:Hover": {
      backgroundColor: "red",
      color: "white",
    },
    nextbutton: {
      fontweight: "bold",
      fontSize: 20,
      backgroundColor: "blue",
      padding: 20,
      "&:Hover": {
        backgroundColor: "green",
        color: "white",
      },
    },
  },
});

const CardComponent = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography color="warning" className={classes.title} gutterBottom>
          Input elements
          <TextFields />
        </Typography>
        <TextField
          multiline
          // rows={10}
          defaultValue="Default Value"
          variant="outlined"
          sx={{
            "& .MuiInputBase-inputMultiline": {
              resize: "both", // 'horizontal', 'vertical', or 'both'
            },
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          className={classes.nextbutton}
          size="small"
          endIcon={<NavigateNextOutlined />}
          color="secondary"
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
