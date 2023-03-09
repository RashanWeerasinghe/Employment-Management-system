import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const [eType, setETape] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    setETape(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5000/employee")
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          People
        </Typography>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "right",
            p: 1,
            borderRadius: 1,
          }}
        >
          <FormControl sx={{ m: 1, width: "75ch" }}>
            <InputLabel id="demo-simple-select-label">
              {" "}
              Employee Types
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={eType}
              label=" Employee Types"
              onChange={handleChange}
            >
              <MenuItem value={10}>Full time</MenuItem>
              <MenuItem value={20}>Part time</MenuItem>
              <MenuItem value={30}>Contract Basis</MenuItem>
              <MenuItem value={40}>Other</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" component={Link} to={"/AddPeople"}>
            Add People
          </Button>
        </Box>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Display Name</TableCell>
                <TableCell align="right">Emp ID</TableCell>
                <TableCell align="right">Designation</TableCell>
                <TableCell align="right">Emp Type</TableCell>
                <TableCell align="right">Experience</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.emp_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.display_name}
                  </TableCell>
                  <TableCell align="right">{row.emp_id}</TableCell>
                  <TableCell align="right">{row.designation}</TableCell>
                  <TableCell align="right">{row.emp_type}</TableCell>
                  <TableCell align="right">{row.experience}</TableCell>
                  <TableCell align="right">
                    <Button>Edit</Button>
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Dashboard;
