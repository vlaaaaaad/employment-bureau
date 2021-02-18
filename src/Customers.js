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
    backgroundColor: theme.palette.success.main,
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
  createData('Савельева Елена Ефимовна', 'QA', 5, 2000, 10000),
  createData('Назарова Флорентина Тарасовна', 'PM', 2, 1500, 1500),
  createData('Бердинских Сидор Эдуардович', 'Senior Dev', 3, 7000, 5000),
  createData('Румянцев Адриан Тарасович', 'Middle Dev', 3, 2500, 3000),
  createData('Химченко Валерьян Валерьевич', 'Team Lead', 7, 5000, 1000),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ФІО</StyledTableCell>
            <StyledTableCell align="right">Посада</StyledTableCell>
            <StyledTableCell align="right">Досвід, років</StyledTableCell>
            <StyledTableCell align="right">Бажана заробітна плата, $</StyledTableCell>
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