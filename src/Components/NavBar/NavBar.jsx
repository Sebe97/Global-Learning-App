// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <ButtonGroup variant="text" color="inherit">
          <Button component={Link} to="/">
            Home
          </Button>
          <Button component={Link} to="/cell-renderer">
            CellRenderer
          </Button>
          <Button component={Link} to="/customised-header">
            CustomisedHeader
          </Button>
          <Button component={Link} to="/antd">
            AntDesign
          </Button>
          <Button component={Link} to="/flex-3-columns">
            Flex3Columns
          </Button>
          <Button component={Link} to="/hooks">
            Hooks
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Open Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/MUI-Grid">
              Link 1
            </MenuItem>
            <MenuItem component={Link} to="/MUI-Grid">
              Link 2
            </MenuItem>
            <MenuItem component={Link} to="/MUI-Grid">
              Link 3
            </MenuItem>
          </Menu>
          <Button component={Link} to="/MUI-Grid">
            MUI Grid
          </Button>
          <Button component={Link} to="/login">
            Login
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
