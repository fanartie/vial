import { IconButton, Box, Icon } from "@mui/material";

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
