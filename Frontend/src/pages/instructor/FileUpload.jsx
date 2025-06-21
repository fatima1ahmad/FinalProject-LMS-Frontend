import React from "react";
import { Button, Box, CircularProgress, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = ({
  accept,
  label,
  onFileUpload,
  disabled = false,
  currentFileUrl = null,
  fileType = "file",
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <Box sx={{ mb: 2 }}>
      <input
        accept={accept}
        style={{ display: "none" }}
        id={`file-upload-${label.replace(/\s+/g, "-")}`}
        type="file"
        onChange={handleFileChange}
        disabled={disabled}
      />
      <label htmlFor={`file-upload-${label.replace(/\s+/g, "-")}`}>
        <Button
          component="span"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          disabled={disabled}
        >
          {label}
        </Button>
      </label>

      {currentFileUrl && (
        <Box mt={2}>
          {fileType === "image" ? (
            <img
              src={currentFileUrl}
              alt="Uploaded"
              style={{ maxWidth: "100%", maxHeight: 200 }}
            />
          ) : fileType === "video" ? (
            <video
              controls
              src={currentFileUrl}
              style={{ maxWidth: "100%", maxHeight: 200 }}
            />
          ) : (
            <Typography>
              <a
                href={currentFileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Uploaded File
              </a>
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;
