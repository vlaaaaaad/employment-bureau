import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#2196f3",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, position, experience, sallary, comission) {
  return { name, position, experience, sallary, comission };
}

const rows = [
  createData('Google', 'Senior dev', 5, 5000, 0),
  createData('Google', 'Senior dev', 3, 2000, 0),
  createData('Google', 'Team Lead', 10, 10000, 5000),
  createData('Amazon', 'QA', 3, 1000, 1000),
  createData('Microsoft', 'Senior dev', 16.0, 3000, 1000),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Workplaces() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Назва компанії</StyledTableCell>
            <StyledTableCell align="right">Посада</StyledTableCell>
            <StyledTableCell align="right">Мінімальний досвід, років</StyledTableCell>
            <StyledTableCell align="right">Оклад, $</StyledTableCell>
            <StyledTableCell align="right">Комісія, грн</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{row.experience}</StyledTableCell>
              <StyledTableCell align="right">{row.sallary}</StyledTableCell>
              <StyledTableCell align="right">{row.comission}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}