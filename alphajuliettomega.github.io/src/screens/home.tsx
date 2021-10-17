import * as React from "react";
import { Manager } from "../models/manager";

import { Paper } from "@mui/material";
import { Office } from "../models/office";
import OfficeAccordion from "../components/officeAccordion";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
function Home(props: {
  officeSpace: Manager;
  selectOfficeHandler: (newIndex: number) => void;
  selectWorkerHandler: (newIndex: number) => void;
}) {
  console.log(
    "[Debug]",
    "Home render triggered with Office Space:",
    props.officeSpace
  );
  return (
    <div className="App">
      <header className="App-header">
        <h2>All Offices:</h2>
        {props.officeSpace.offices.map((office: Office, index: number) => {
          return (
            <OfficeAccordion
              office={office}
              selectOfficeHandler={props.selectOfficeHandler}
              index={index}
            ></OfficeAccordion>
          );
        })}

        <h4>Remaining Objectives</h4>
        <p>Improve the application that satisfies the following cases</p>
        <p>The system must allow users to create and manage office space.</p>
        <p>A user must then be able to add a new office.</p>
        <p>Once an office is added it must appear on the home page.</p>
        <p>
          If a user clicks on the office they must be able to view the office
          details including individuals who work at the office.
        </p>
        <p>
          The user must be able to create, update, and delete office workers.
        </p>
        <p>There must be a search bar on the office view page.</p>
        <p>
          This component must filter the list of users within the office as the
          user is typing.
        </p>
      </header>
      <div className="App-header"></div>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          width: "30vw",
          right: 0,
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Fab color="primary" className={"button-fab"} aria-label="add">
          <AddIcon />
        </Fab>
      </Paper>
    </div>
  );
}

export default Home;
