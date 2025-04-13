import { Visibility as VisibilityIcon } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useAppContext } from "@hooks";

export const BtnPreview = () => {
  const { items }: any = useAppContext();

  if (items.length === 0) {
    return null;
  } else
    return (
      <div className="flex items-center justify-center h-screen">
        <IconButton aria-label="preview">
          <VisibilityIcon />
          <Typography variant="h6">Preview</Typography>
        </IconButton>
      </div>
    );
};
