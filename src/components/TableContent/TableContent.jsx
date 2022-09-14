import Button from "@mui/material/Button";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { React, useState } from "react";
import { createUseStyles } from "react-jss";
import { useSelector } from "react-redux";

const TableContent = () => {
  const data = useSelector((state) => state.fetchReducer.data);
  const [state, setState] = useState("Active");

  const useStyles = createUseStyles({
    tableBlock: {
      width: "968px",
      position: "absolute",
      left: "30%",
      top: "8%",
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

  const classes = useStyles();
  const rows = data;

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
          <Button
            sx={{ width: "80px", height: "29px" }}
            variant="contained"
            color="secondary"
            onClick={() => {
              setState("Inactive");
            }}
          >
            {state}
          </Button>
        );
      },
    },
  ];

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
