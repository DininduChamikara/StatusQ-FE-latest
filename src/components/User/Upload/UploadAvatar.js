import isString from "lodash/isString";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
// @mui
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import RejectionFiles from "./RejectionFiles";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  width: 144,
  height: 144,
  margin: "auto",
  borderRadius: "50%",
  padding: theme.spacing(1),
  border: `1px dashed ${theme.palette.grey[500_32]}`,
}));

const DropZoneStyle = styled("div")({
  zIndex: 0,
  width: "100%",
  height: "100%",
  outline: "none",
  display: "flex",
  overflow: "hidden",
  borderRadius: "50%",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  "& > *": { width: "100%", height: "100%" },
  "&:hover": {
    cursor: "pointer",
    "& .placeholder": {
      zIndex: 9,
    },
  },
});

const PlaceholderStyle = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.neutral,
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": { opacity: 0.72 },
}));

// ----------------------------------------------------------------------

UploadAvatar.propTypes = {
  error: PropTypes.bool,
  helperText: PropTypes.node,
  sx: PropTypes.object,
};

export default function UploadAvatar({
  uploadedImg,
  error,
  file,
  helperText,
  sx,
  ...other
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple: false,
    ...other,
  });

  return (
    <>
      <RootStyle
        sx={{
          ...((isDragReject || error) && {
            borderColor: "error.light",
          }),
          ...sx,
        }}
      >
        <DropZoneStyle
          {...getRootProps()}
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
          }}
        >
          <input
            accept={{
              "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            }}
            {...getInputProps()}
          />

          {uploadedImg && (
            <img
              alt="avatar"
              src={isString(uploadedImg) ? uploadedImg : uploadedImg.preview}
              sx={{ zIndex: 8 }}
            />
          )}

          <PlaceholderStyle
            className="placeholder"
            sx={{
              ...(uploadedImg && {
                opacity: 0,
                color: "common.white",
                bgcolor: "grey.900",
                "&:hover": { opacity: 0.72 },
              }),
              ...((isDragReject || error) && {
                bgcolor: "error.lighter",
              }),
            }}
          >
            <AddAPhotoIcon
              icon={"ic:round-add-a-photo"}
              sx={{ width: 24, height: 24, mb: 1 }}
            />

            <Typography variant="caption">
              {uploadedImg ? "Update photo" : "Upload photo"}
            </Typography>
          </PlaceholderStyle>
        </DropZoneStyle>
      </RootStyle>

      {helperText && helperText}

      {fileRejections.length > 0 && (
        <RejectionFiles fileRejections={fileRejections} />
      )}
    </>
  );
}
