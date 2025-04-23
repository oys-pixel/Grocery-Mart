import React, { useState } from "react";
import MyInput from "../Includes/MaterialInput";

function GettingValues({ data, handleDelete, handleEdit, archiveData }) {
  const [searchItems, setSearchItems] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchItems.toLowerCase())
  );

  return (
    <>
      <div className="container mt-4 ">
        <MyInput
          value={searchItems}
          onChange={(e) => setSearchItems(e.target.value)}
        />
        {filteredData?.length === 0 ? (
          <h1 className=" mt-5 text-center"> No Data</h1>
        ) : (
          <div className="row justify-content-between ">
            {filteredData?.map((item, index) => (
              <div className="col-md-4 mb-3 " key={index}>
                <div className=" my-Form-card">
                  <span>
                    Name <p>{item.name}</p>
                  </span>
                  <span>
                    Number: <p>{item.number}</p>
                  </span>
                  <span>
                    E-mail: <p>{item.email}</p>
                  </span>
                  <span>
                    Password: <p>{item.Password}</p>
                  </span>
                  <span>
                    Confirm Password: <p>{item.confirmPassword}</p>
                  </span>
                  <span>
                    skill: <p>{item.skill.join(" | ")}</p>
                  </span>

                  <span>
                    Skills:<p>{item.skills.join(" | ")}</p>
                  </span>
                  <span>
                    Gender:<p>{item.gender}</p>
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
                        className="bi bi-trash-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                      </svg>
                      Delete
                    </button>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => handleEdit(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square me-2"
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
                    {/* <button
                      className="btn btn-success mx-2"
                      onClick={() => archiveData(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-archive"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                      </svg>
                      Archive
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default GettingValues;

export function Archived({ archive }) {
  if (!archive?.length) {
    <h3>No Archive Data</h3>;
  }
  return (
    <>
      <div className="row justify-content-between ">
        {archive?.map((item, index) => (
          <div className="col-md-4 mb-3 " key={index}>
            <div className=" my-Form-card">
              <span>
                Name <p>{item.name}</p>
              </span>
              <span>
                Number: <p>{item.number}</p>
              </span>
              <span>
                E-mail: <p>{item.email}</p>
              </span>
              <span>
                Password: <p>{item.Password}</p>
              </span>
              <span>
                Confirm Password: <p>{item.confirmPassword}</p>
              </span>
              <span>
                skill: <p>{item.skill.join(" | ")}</p>
              </span>

              <span>
                Skills:<p>{item.skills.join(" | ")}</p>
              </span>
              <span>
                Gender:<p>{item.gender}</p>
              </span>
              <div className="box"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
