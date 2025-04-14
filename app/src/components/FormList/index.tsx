import { useFormData } from "@hooks";
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
} from "@mui/material";
import { BtnAddForm } from "@components";

export const FormList = () => {
  const { isLoading, isError, form } = useFormData({});

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading form</div>;
  if (!form) return <div>No form data available</div>;

  const onEdit = (formId: string) => {
    window.location.href = `/form-builder/${formId}`;
  };
  const onFill = (formId: string) => {
    window.location.href = `/form-fill/${formId}`;
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Records</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {form.map((row: any) => (
              <TableRow
                key={["formName", row.id].join(".")}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.sourceRecordCount}</TableCell>
                <TableCell>
                  <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button onClick={() => onEdit(row.id)}>Edit</Button>
                    <Button onClick={() => onFill(row.id)}>Fill</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BtnAddForm />
    </div>
  );
};
