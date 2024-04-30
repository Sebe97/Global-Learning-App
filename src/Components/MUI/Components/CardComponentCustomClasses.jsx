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
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
// cu useStyles adaug calse custom elementelor, deci nu ma mai folosesc de
// culorile default ale clasei
// Deasemenea pot suprascrie diverse culori din thema material-ui
// const useStyles = makeStyles({
//   wrapper: { height: "400px" },
//   title: {
//     background: "#9c9c9c",
//     color: "white",
//   },
//   description: {
//     backgroundColor: "#7c7c7c",
//     padding: 40,
//     "&:Hover": {
//       backgroundColor: "#5c5c5c",
//       color: "white",
//     },
//     nextbutton: {
//       fontweight: "bold",
//       fontSize: 20,
//       backgroundColor: "blue",
//       padding: 20,
//       "&:Hover": {
//         backgroundColor: "green",
//         color: "white",
//       },
//     },
//   },
// });

const CardComponentCustomClasses = () => {
  // const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography
          variant="title"
          color="warning"
          // className={classes.title}
          gutterBottom
        >
          Custom Classes, folosind MakeStyle nu mai e de actualitate, cei de la
          MUI recomanda folosirea de Styled Components
        </Typography>
        <Typography
          color="warning"
          // className={classes.description}
          gutterBottom
          startIcon={<FormatColorFillIcon />}
        >
          In acest card am folosit: - custom classes folosing makeStyles
        </Typography>
        <TextField
          multiline
          rows={3}
          label="Multiline"
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
          // className={classes.nextbutton}
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

export default CardComponentCustomClasses;
