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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

const EditPeople = (params) => {
  let { idp } = useParams();
  const [full_name, setFull_name] = useState(params.full_name);
  const [name_with_initial, setName_with_initial] = useState(
    params.name_with_initial
  );
  const [display_name, setDisplay_name] = useState(params.display_name);
  const [gender, setGender] = useState(params.display_name);
  const [dob, setDop] = useState(params.dob);
  const [db, setDp] = useState(dayjs("2022-04-17"));
  const [email, setEmail] = useState(params.email);
  const [p_number, setP_number] = useState(params.p_number);
  const [designation, setDesignation] = useState(params.designation);
  const [emp_type, setEmp_type] = useState(params.emp_type);
  const [join_date, setJoin_date] = useState(params.join_date);
  const [jn_date, setJn_date] = useState(dayjs("2022-04-17"));
  const [experience, setExperience] = useState(params.experience);
  const [salary, setSalary] = useState(params.salary);
  const [notes, setNotes] = useState(params.notes);

  const emp = ["Full time", "Part time", "Contract Basis", "Other"];

  const exp = [
    "1 years",
    " 2 years",
    "3 years",
    " 4 years",
    " 5 years",
    " 6 years",
    "7 years",
    "8 years",
    " 9 years",
    "10 years",
    "11 years",
  ];

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
      // case "dob":
      //   setDop(db);
      //   break;
      case "email":
        setEmail(e.target.value);
        break;
      case "p_number":
        setP_number(e.target.value);
        break;
      case "designation":
        setDesignation(e.target.value);
        break;
      // case "emp_type":
      //   setEmp_type(
      //     typeof e.target.value === "string"
      //       ? e.target.value.split(",")
      //       : e.target.value
      //   );
      //   break;
      // case "join_date":
      //   setJoin_date(jn_date);
      //   break;
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

  // const handleDate = (e) => {
  //   if (e === "dob") {
  //     setDop(db);
  //   } else if (e === "join_date") {
  //     setJoin_date(jn_date);
  //   }
  // };

  const handleChangeEmpType = (event) => {
    const {
      target: { value },
    } = event;
    setEmp_type(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onchangeExperience = (event) => {
    const {
      target: { value },
    } = event;
    setExperience(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onchangeGender = (event) => {
    const {
      target: { value },
    } = event;
    setGender(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  useEffect(() => {
    console.log(idp);
  }, []);
  const EditPeopleHandle = async () => {
    if (full_name !== "" || name_with_initial !== "") {
      await axios
        .put(`http://localhost:5000/employee/${params.emp_id}`, {
          full_name: full_name,
          name_with_initial: name_with_initial,
          display_name: display_name,
          gender: gender,
          dob: dob,
          email: email,
          p_number: p_number,
          designation: designation,
          emp_type: emp_type,
          join_date: join_date,
          experience: experience,
          salary: salary,
          notes: notes,
        })
        .then((response) => {
          console.log(response);
        });
    } else {
      console.log("please fill");
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
            onChange={onchangeGender}
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
                onChange={(res) => {
                  let year = res.$y;
                  let month = res.$M;
                  let day = res.$D;
                  const dtp = `${year}` + "-" + `${month}` + "-" + `${day}`;
                  setDp(dtp);
                  setDop(res);
                  // handleDate("dob");
                }}
                defaultValue={dayjs("1997-04-17")}
                sx={{ m: 1, width: "75ch" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </FormControl>

        <FormControl
          fullWidth
          sx={{ m: 1, width: "75ch" }}
          name="email"
          value={email}
          onChange={onchange}
        >
          <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
          <OutlinedInput id="email" label="Designation" />
        </FormControl>

        <FormControl
          fullWidth
          sx={{ m: 1, width: "75ch" }}
          name="p_number"
          value={p_number}
          onChange={onchange}
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            Mobile Number
          </InputLabel>
          <OutlinedInput id="p_number" label="Designation" />
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
            onChange={handleChangeEmpType}
          >
            {/* <MenuItem value={10}>Full time</MenuItem>
            <MenuItem value={20}>Part time</MenuItem>
            <MenuItem value={30}>Contract Basis</MenuItem>
            <MenuItem value={40}>Other</MenuItem> */}

            {emp.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Joined Date"
                id="join_date"
                value={join_date}
                onChange={(res) => {
                  let year = res.$y;
                  let month = res.$M;
                  let day = res.$D;
                  const dt = `${year}` + "-" + `${month}` + "-" + `${day}`;
                  setJn_date(dt);
                  console.log(jn_date);
                  setJoin_date(res);
                  // handleDate("join_date");
                }}
                defaultValue={dayjs("2022-04-17")}
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
            onChange={onchangeExperience}
          >
            {/* <MenuItem value={"1 years"}>1 years</MenuItem>
            <MenuItem value={"2 years"}>2 years</MenuItem>
            <MenuItem value={"3 years"}>3 years</MenuItem>
            <MenuItem value={"4 years"}>4 years</MenuItem>
            <MenuItem value={"5 years"}>5 years</MenuItem>
            <MenuItem value={"6 years"}>6 years</MenuItem>
            <MenuItem value={"7 years"}>7 years</MenuItem>
            <MenuItem value={"8 years"}>8 years</MenuItem>
            <MenuItem value={"9 years"}>9 years</MenuItem>
            <MenuItem value={"10 years"}>10 years</MenuItem>
            <MenuItem value={"11 years"}>11 years</MenuItem> */}

            {exp.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
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
          <Button variant="contained" onClick={EditPeopleHandle}>
            Edit People
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default EditPeople;
