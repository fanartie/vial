import { useSourceRecordData_formId } from "@hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ButtonGroup,
  Button,
  Drawer,
  Box,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSourceRecordData } from "@hooks";

// This component fetches and displays the list of source records for a given form
export const SourceRecordList = () => {
  const { formId } = useParams();
  const { isLoading, isError, sourceRecords } = useSourceRecordData_formId({
    formId,
  });

  const [open, setOpen] = useState(false);
  const [sourceRecordId, setSourceRecordId]: any = useState();

  const { sourceRecord } = useSourceRecordData({
    sourceRecordId,
  });

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading source records</div>;
  if (!sourceRecords) return <div>No source record data available</div>;

  const onView = (id: string) => {
    setOpen(true);
    setSourceRecordId(id);
  };

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div>
          {sourceRecord?.sourceData.map((item: any) => {
            return (
              <Box
                display="flex"
                flexDirection="column"
                bgcolor="white"
                p={2}
                borderRadius={2}
                key={item.id}
                style={{ width: "500px" }}
              >
                <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
                  Q: {item.question}
                </div>
                <div>A: {item.answer}</div>
              </Box>
            );
          })}
        </div>
      </Drawer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>created at</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sourceRecords.map((row: any) => (
              <TableRow
                key={["sourceRecords", row.id].join(".")}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>
                  <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button
                      onClick={() => {
                        onView(row.id);
                      }}
                    >
                      View
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
