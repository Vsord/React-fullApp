import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";

const TableContent = () => {
  const data = useSelector((state) => state.fetchReducer.data);

  const useStyles = createUseStyles({
    tableBlock: {
      width: "968px",
      position: "absolute",
      left: "30%",
      top: "13%",
      background: "#FFF",
    },
    tableTitle: {
      margin: {
        left: "38px",
        right: "0px",
        top: "20px",
        bottom: "20px",
      },
    },
  });

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 160 },
    { field: "username", headerName: "User name", width: 120 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "phone", headerName: "Phone", width: 180 },
    { field: "website", headerName: "Website", width: 110 },
    {
      field: "Status",
      renderCell: () => {
        return (
          <Button sx={{ width: "80px", height: "29px" }} variant="contained" color="secondary">
            Active
          </Button>
        );
      },
    },
  ];

  const rows = data;
  const classes = useStyles();

  return (
    <div className={classes.tableBlock}>
      <h2 className={classes.tableTitle}>All customers</h2>
      <DataGrid
        sx={{ height: "650px" }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default TableContent;
