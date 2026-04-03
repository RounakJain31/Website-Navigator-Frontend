import React, { useState } from "react";
import axios from "axios";
import { Button, Box } from "@mui/material";

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      "http://localhost:5000/upload",
      formData
    );

    onUpload(res.data);
  };

  return (
    <Box p={3}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <Button
        variant="contained"
        onClick={handleUpload}
        sx={{ ml: 2 }}
      >
        Upload
      </Button>
    </Box>
  );
};

export default FileUpload;