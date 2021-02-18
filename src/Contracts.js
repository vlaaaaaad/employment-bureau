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
    backgroundColor: "#f44336",
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

function createData(contractId, workerName, companyName, position,  sallary, totalComission) {
  return { contractId, workerName, companyName, position, sallary, totalComission };
}

const rows = [
  createData(1, 'Химченко Валерьян Валерьевич', 'Google', 'Senior dev', 5000, 1000),
  createData(2, 'Савельева Елена Ефимовна', 'Amzaon', 'QA', 1500, 11000),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Contracts() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Номер контракту</StyledTableCell>
            <StyledTableCell align="right">ФІО</StyledTableCell>
            <StyledTableCell align="right">Назва команії</StyledTableCell>
            <StyledTableCell align="right">Посада</StyledTableCell>
            <StyledTableCell align="right">Оклад, $</StyledTableCell>
            <StyledTableCell align="right">Загальна комісія, грн</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.contractId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.workerName}</StyledTableCell>
              <StyledTableCell align="right">{row.companyName}</StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{row.sallary}</StyledTableCell>
              <StyledTableCell align="right">{row.totalComission}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}