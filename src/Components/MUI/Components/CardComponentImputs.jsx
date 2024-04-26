import React from "react";
import { TextField, Button, Container, Box, Paper } from "@mui/material";

const CardComponentInputs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log({
      field1: formData.get("field1"),
      field2: formData.get("field2"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Container
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="field1"
          label="Field 1"
          name="field1"
          autoComplete="field1"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="field2"
          label="Field 2"
          name="field2"
          autoComplete="field2"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Container>
    </Container>
  );
};
export default CardComponentInputs;
