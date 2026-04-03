import React from "react";
import { Box } from "@mui/material";

const WebViewer = ({ currentUrl }) => {
  return (
    <Box p={2}>
      <iframe
        src={currentUrl}
        title="Website Viewer"
        width="100%"
        height="500px"
        style={{ border: "1px solid #ccc" }}
      />
      
      {/* Fallback */}
      <a href={currentUrl} target="_blank" rel="noreferrer">
        Open in new tab
      </a>
    </Box>
  );
};

export default WebViewer;