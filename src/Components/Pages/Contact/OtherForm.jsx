import  { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import { exportToExcel, exportToPDF } from "../../Includes/MaterialInput";

function GettingValues({ data, handleDelete, handleEdit }) {
  const [searchKey, setSearchKey] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const filteredData = data.filter((item) =>
    item[searchKey]
      ?.toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );
  const customData = data.map((item) => ({
    Name: item.name,
    Number: item.number,
    Email: item.email,
    Password: item.Password,
    "Confirm Password": item.confirmPassword,
    Skill: item.skill.join(" , "),
    skills: item.skills.join(" , "),
    gender: item.gender,
  }));
  return (
    <div className="container mt-4">
      {/* <Link to={"/home"} replace className="m-5">
        Go to Home
      </Link> */}
      <div className="d-flex col-md-12 gap-3 mb-3">
        <FormControl>
          <InputLabel>Search By</InputLabel>
          <Select
            value={searchKey}
            label="Search By"
            onChange={(e) => setSearchKey(e.target.value)}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="number">Number</MenuItem>
            <MenuItem value="gender">Gender</MenuItem>
            <MenuItem value="Password">Password</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label={`Search ${searchKey}`}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </InputAdornment>
            ),
          }}
        />
        <button
          className="btn btn-outline-success mx-2"
          onClick={() => exportToExcel(customData)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-filetype-xml"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.527 11.85h-.893l-.823 1.439h-.036L.943 11.85H.012l1.227 1.983L0 15.85h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992zm.954 3.999v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596h-.025L4.58 11.85h-.806v3.999zm4.71-.674h1.696v.674H8.4V11.85h.791z"
            />
          </svg>
          Export
        </button>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={() => exportToPDF(data)}
        >
          Export to PDF
        </button>
        {/* <Table /> */}
      </div>

      {filteredData.length === 0 ? (
        <h3 className="text-center mt-4">No matching records</h3>
      ) : (
        <div className="row justify-content-between">
          {filteredData.map((item, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <div className="my-Form-card">
                <span>
                  Name: <p>{item.name}</p>
                </span>
                <span>
                  Number: <p>{item.number}</p>
                </span>
                <span>
                  Email: <p>{item.email}</p>
                </span>
                <span>
                  Password: <p>{item.Password}</p>
                </span>
                <span>
                  Confirm Password: <p>{item.confirmPassword}</p>
                </span>
                <span>
                  Skill: <p>{item.skill?.join(" | ")}</p>
                </span>
                <span>
                  Skills: <p>{item.skills?.join(" | ")}</p>
                </span>
                <span>
                  Gender: <p>{item.gender}</p>
                </span>

                <div className="box">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                    Delete
                  </button>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => handleEdit(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GettingValues;

// simple search functionality to filter data based on user input
// const [searchItems, setSearchItems] = useState("");
// const [filteredData, setFilteredData] = useState(data);

// useEffect(() => {
//   setFilteredData(data);
// }, [data]);

// const handleSearch = (e) => {
//   const value = e.target.value.toLowerCase();
//   setSearchItems(value);

//   if (!value) {
//     setFilteredData(data);
//     return;
//   }

//   const result = data.filter((item) =>
//     Object.values(item).some((val) =>
//       String(Array.isArray(val) ? val.join(" ") : val)
//         .toLowerCase()
//         .includes(value)
//     )
//   );

//   setFilteredData(result);
// };
