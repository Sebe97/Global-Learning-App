import * as React from "react";
import { ButtonGroup, Button, Container, Typography } from "@mui/material";
import { useCounter } from "./useCounter.js";

export default function BasicButtonGroup() {
  const [counterValue, increment, decrement, reset] = useCounter(0);
  return (
    <Container container spacing={2}>
      <Typography variant="body1" color="initial">
        {counterValue}
      </Typography>

      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
      </ButtonGroup>
    </Container>
  );
}
