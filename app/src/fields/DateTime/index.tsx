import { Box } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

export const DateTime = (props: any) => {
  const { item } = props;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="white"
      p={2}
      borderRadius={2}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
          <DateTimePicker
            label={item.question}
            defaultValue={dayjs(item.value)}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};
