import React, { useState } from "react";

export const useCounter = (initialValue) => {
  const [counterValue, setCoutnerValue] = React.useState(initialValue);

  const increment = () => {
    setCoutnerValue((prev) => prev + 1);
  };

  const decrement = () => {
    setCoutnerValue((prev) => prev - 1);
  };
  const reset = () => {
    setCoutnerValue(0);
  };

  return { counterValue, increment, decrement, reset };
};
