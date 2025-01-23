import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  code: string,
  name: string,
  email: string,
  position: string,
  status: string
) {
  return { code, name, email, position, status };
}

const rows = [
  {
    code: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "jjjj",
    status: "hhhh",
  },
  {
    code: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "jjjj",
    status: "hhhh",
  },
  {
    code: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "jjjj",
    status: "hhhh",
  },
  {
    code: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "jjjj",
    status: "hhhh",
  },
  {
    code: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "jjjj",
    status: "hhhh",
  },
  {
    code: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "jjjj",
    status: "hhhh",
  },
  {
    code: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "jjjj",
    status: "hhhh",
  },
  {
    code: 1,
    name: "John Doe",
    email: "john@example.com",
    position: "jjjj",
    status: "hhhh",
  },
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "90%", margin: "50px " }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Employee Code</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Is Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
