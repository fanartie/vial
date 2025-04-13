import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Box, Icon } from "@mui/material";
import { useAppContext } from "@hooks";

export const BtnAddItem = () => {
  const { setState }: any = useAppContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu item selection
  const handleMenuItemClick = (columnType: string) => {
    setAnchorEl(null); // Close the menu
    setState((prevState: any) => {
      const newItem = {
        id: `item-${prevState.items.length + 1}`,
        label: `${columnType} ${prevState.items.length + 1}`,
        type: columnType,
        placeholder: `Placeholder ${prevState.items.length + 1}`,
      };
      return {
        ...prevState,
        items: [...prevState.items, newItem],
      };
    });
  };

  // Handle menu close
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton onClick={onClick} color="primary" size="large">
        <Icon baseClassName="fas" className="fa-plus-circle" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {/* Menu Items */}
        <MenuItem onClick={() => handleMenuItemClick("Text")}>Text</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Number")}>
          Number
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Dropdown")}>
          Dropdown
        </MenuItem>
      </Menu>
    </Box>
  );
};
