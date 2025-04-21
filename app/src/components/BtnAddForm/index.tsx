import { IconButton, Box, Icon } from "@mui/material";

// This component is used to add a new form
export const BtnAddForm = () => {
  const onAddForm = () => {
    window.location.href = "/form-builder/new";
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={onAddForm} color="primary" size="large">
        <Icon baseClassName="fas" className="fa-plus-circle" />
      </IconButton>
    </Box>
  );
};
