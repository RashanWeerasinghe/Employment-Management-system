import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const AddPeople = () => {
  const [full_name, setFull_name] = useState("");
  const [name_with_initial, setName_with_initial] = useState("");
  const [display_name, setDisplay_name] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDop] = useState("");
  const [email, setEmail] = useState("");
  const [p_number, setP_number] = useState("");
  const [designation, setDesignation] = useState("");
  const [emp_type, setEmp_type] = useState("");
  const [join_date, setJoin_date] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [notes, setNotes] = useState("");

  const onchange = (e) => {
    switch (e.target.id) {
      case "full_name":
        setFull_name(e.target.value);
        break;
      case "name_with_initial":
        setName_with_initial(e.target.value);
        break;
      case "display_name":
        setDisplay_name(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        break;
      case "dob":
        setDop(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "p_number":
        setP_number(e.target.value);
        break;
      case "designation":
        setDesignation(e.target.value);
        break;
      case "emp_type":
        setEmp_type(e.target.value);
        break;
      case "join_date":
        setJoin_date(e.target.value);
        break;
      case "experience":
        setExperience(e.target.value);
        break;
      case "salary":
        setSalary(e.target.value);
        break;
      case "notes":
        setNotes(e.target.value);
        break;
      default:
        break;
    }
  };

  // useEffect(() => {
  //   console.log(full_name);
  // }, [full_name]);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              borderRadius: 1,
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add People
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link to="/">
                <CloseIcon />
              </Link>
            </IconButton>
          </Box>
        </div>
        <FormControl
          fullWidth
          sx={{ m: 1, width: "150ch" }}
          name="full_name"
          id="full_name"
          onChange={onchange}
          value={full_name}
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            Full Name*
          </InputLabel>
          <OutlinedInput id="full_name" label="FullName" />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1, width: "75ch" }}
          name="name_with_initial"
          value={name_with_initial}
          onChange={onchange}
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            Name with initials*
          </InputLabel>
          <OutlinedInput id="name_with_initial" label="Name with initials" />
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1, width: "75ch" }}
          name="display_name"
          value={display_name}
          onChange={onchange}
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            Preferred / Display Name
          </InputLabel>
          <OutlinedInput id="display_name" label="Preferred / Display Name" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            // id="gender"
            label="gender"
            name="gender"
            value={gender}
            // onChange={onchange}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Date of Birth"
                id="dob"
                value={dob}
                onChange={onchange}
                sx={{ m: 1, width: "75ch" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1, width: "75ch" }}
          name="designation"
          value={designation}
          onChange={onchange}
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            Designation
          </InputLabel>
          <OutlinedInput id="designation" label="Designation" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel id="demo-simple-select-label">Employee Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="emp_type"
            value={emp_type}
            label="Employee Type"
            // onChange={onchange}
          >
            <MenuItem value={">Full time"}>Full time</MenuItem>
            <MenuItem value={"Part time"}>Part time</MenuItem>
            <MenuItem value={"Contract Basis"}>Contract Basis</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Joined Date"
                id="join_date"
                value={join_date}
                onChange={onchange}
                sx={{ m: 1, width: "75ch" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel id="demo-simple-select-label">Experience</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="experience"
            value={experience}
            label="Experience"
            // onChange={onchange}
          >
            <MenuItem value={"1 years"}>1 years</MenuItem>
            <MenuItem value={"2 years"}>2 years</MenuItem>
            <MenuItem value={"3 years"}>3 years</MenuItem>
            <MenuItem value={"4 years"}>4 years</MenuItem>
            <MenuItem value={"5 years"}>5 years</MenuItem>
            <MenuItem value={"6 years"}>6 years</MenuItem>
            <MenuItem value={"7 years"}>7 years</MenuItem>
            <MenuItem value={"8 years"}>8 years</MenuItem>
            <MenuItem value={"9 years"}>9 years</MenuItem>
            <MenuItem value={"10 years"}>10 years</MenuItem>
            <MenuItem value={"11 years"}>11 years</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          sx={{ m: 1, width: "75ch" }}
          value={salary}
          onChange={onchange}
        >
          <InputLabel htmlFor="outlined-adornment-amount">Salary</InputLabel>
          <OutlinedInput id="salary" label="Salary" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "150ch" }}>
          <TextField
            id="notes"
            label="Personal Notes"
            multiline
            rows={10}
            variant="outlined"
            value={notes}
            onChange={onchange}
          />
        </FormControl>
      </div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            p: 1,
            borderRadius: 1,
            gap: 5,
          }}
        >
          <Button variant="outlined" component={Link} to={"/"}>
            Cancel
          </Button>
          <Button variant="contained">Add People</Button>
        </Box>
      </div>
    </Box>
  );
};

export default AddPeople;
