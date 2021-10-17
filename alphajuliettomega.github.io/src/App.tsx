// / src/components/StatefulHello.tsx

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import * as React from "react";
import Demo from "./screens/Demo";
import OfficeEdit from "./screens/officeEdit";
import Home from "./screens/home";
import { Manager } from "./models/manager";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
  screenIndex?: any;
  officeSpace: Manager;
  selectedOfficeIndex?: number;
  selectedWorkerIndex?: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1,
      officeSpace: {
        name: this.props.name,
        offices: [
          {
            name: "Specno",
            officeCapacity: 5,
            contactNumber: "082 364 9864",
            email: "info@specno.com",
            address: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530",
            workers: [
              { name: "Jacques Jordaan" },
              { name: "Daniel Novitzkas" },
              { name: "Brandon Watkins" },
              { name: "Ryan Duell" },
              { name: "Jenner Venter" },
              { name: "Janke B Du Toit" },
            ],
          },
          {
            name: "Company Name Here",
            officeCapacity: 5,
            contactNumber: "",
            email: "",
            address: "",
            workers: [
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
            ],
          },
          {
            name: "Company Name Here",
            officeCapacity: 5,
            contactNumber: "",
            email: "",
            address: "",
            workers: [
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
            ],
          },
          {
            name: "Company Name Here",
            officeCapacity: 5,
            contactNumber: "",
            email: "",
            address: "",
            workers: [
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
            ],
          },
          {
            name: "Company Name Here",
            officeCapacity: 5,
            contactNumber: "",
            email: "",
            address: "",
            workers: [
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
              { name: "Worker Name Here" },
            ],
          },
        ],
      },
    };
  }

  selectOffice = (newIndex: number) => {
    this.setState({ selectedOfficeIndex: newIndex });
    console.log(
      "[onClick]",
      "selectOffice triggered with new state:",
      this.state,
      newIndex
    );
    this.updateSelectedOffice(newIndex);
    this.updateScreenIndex(1);
  };

  selectWorker = (newIndex: number) => {
    this.setState({ selectedWorkerIndex: newIndex });
    console.log(
      "[onClick]",
      "selectedWorkerIndex triggered with new state:",
      this.state,
      newIndex
    );
    this.updateSelectedWorker(newIndex);
    this.updateScreenIndex(2);
  };

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  render() {
    const { name } = this.props;
    const { screenIndex, selectedOfficeIndex, officeSpace, currentEnthusiasm } =
      this.state;
    if (currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <>
        <div className="screen-wrapper">
          {(screenIndex === undefined || screenIndex === 0) && (
            <Home
              officeSpace={officeSpace}
              selectOfficeHandler={this.selectOffice}
              selectWorkerHandler={this.selectWorker}
            />
          )}
          {screenIndex === 1 && (
            <OfficeEdit
              name={name}
              officeSpace={officeSpace}
              selectedOfficeIndex={selectedOfficeIndex}
              back={() => this.setState({ screenIndex: 0 })}
            ></OfficeEdit>
          )}
          {screenIndex === 2 && <Demo></Demo>}
          {screenIndex === 3 && (
            <div className="hello">
              <div className="greeting">
                Hello {name + getExclamationMarks(currentEnthusiasm)}
              </div>
              <button onClick={this.onDecrement}>-</button>
              <button onClick={this.onIncrement}>+</button>
            </div>
          )}
        </div>
        {/* <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={this.state.screenIndex}
            onChange={(event, newValue) => {
              this.updateScreenIndex(newValue);
            }}
            className="nav-container"
          >
            <BottomNavigationAction label="Overview" icon={<HomeIcon />} />
            <BottomNavigationAction label="Office" icon={<HomeIcon />} />
            <BottomNavigationAction label="Worker" icon={<HomeIcon />} />
            <BottomNavigationAction label="Other" icon={<HomeIcon />} />
          </BottomNavigation>
        </Paper> */}
      </>
    );
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    console.log("updateEnthusiasm:", currentEnthusiasm);
    this.setState({ currentEnthusiasm });
  }

  updateScreenIndex(screenIndex: number) {
    console.log("updating screenIndex:", screenIndex);
    this.setState({ screenIndex });
  }

  updateSelectedOffice(officeId: number) {
    console.log("updating selectedOffice:", officeId);
    this.setState({ selectedOfficeIndex: officeId });
  }

  updateSelectedWorker(workerId: number) {
    this.setState({ selectedWorkerIndex: workerId });
  }
}

export default App;

function getExclamationMarks(numChars: number) {
  return Array(Math.abs(numChars) + 1).join("!");
}
