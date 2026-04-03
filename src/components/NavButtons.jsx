import React from "react";
import { Button, Box, Typography } from "@mui/material";

const NavButtons = ({
  currentIndex,
  total,
  onNext,
  onPrev,
}) => {
  return (
    <Box textAlign="center" mt={2}>
      <Button
        variant="contained"
        onClick={onPrev}
        disabled={currentIndex === 0}
      >
        Previous
      </Button>

      <Button
        variant="contained"
        onClick={onNext}
        disabled={currentIndex === total - 1}
        sx={{ ml: 2 }}
      >
        Next
      </Button>

      <Typography mt={2}>
        Showing {currentIndex + 1} of {total}
      </Typography>
    </Box>
  );
};

export default NavButtons;