import React, { useState } from "react";
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
import dayjs from "dayjs";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const AddPeople = () => {
  const [value, setValue] = useState(dayjs("2022-04-17"));

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
        <FormControl fullWidth sx={{ m: 1, width: "150ch" }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Full Name*
          </InputLabel>
          <OutlinedInput id="outlined-adornment-amount" label="FullName" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Name with initials*
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Name with initials"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Preferred / Display Name
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            label="Preferred / Display Name"
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={}
            label="Age"
            // onChange={}
          >
            <MenuItem value={10}>Male</MenuItem>
            <MenuItem value={20}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Date of Birth"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{ m: 1, width: "75ch" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Designation
          </InputLabel>
          <OutlinedInput id="outlined-adornment-amount" label="Designation" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel id="demo-simple-select-label">Employee Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={}
            label="Employee Type"
            // onChange={}
          >
            <MenuItem value={10}>Full time</MenuItem>
            <MenuItem value={20}>Part time</MenuItem>
            <MenuItem value={30}>Contract Basis</MenuItem>
            <MenuItem value={40}>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker", "DatePicker"]}>
              <DatePicker
                label="Joined Date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{ m: 1, width: "75ch" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel id="demo-simple-select-label">Experience</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={}
            label="Experience"
            // onChange={}
          >
            <MenuItem value={1}>1 years</MenuItem>
            <MenuItem value={2}>2 years</MenuItem>
            <MenuItem value={3}>3 years</MenuItem>
            <MenuItem value={4}>4 years</MenuItem>
            <MenuItem value={5}>5 years</MenuItem>
            <MenuItem value={6}>6 years</MenuItem>
            <MenuItem value={7}>7 years</MenuItem>
            <MenuItem value={8}>8 years</MenuItem>
            <MenuItem value={9}>9 years</MenuItem>
            <MenuItem value={10}>10 years</MenuItem>
            <MenuItem value={11}>11 years</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "75ch" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Salary</InputLabel>
          <OutlinedInput id="outlined-adornment-amount" label="Salary" />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, width: "150ch" }}>
          <TextField
            id="outlined-multiline-static"
            label="Personal Notes"
            multiline
            rows={10}
            variant="outlined"
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
