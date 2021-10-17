// / src/components/StatefulHello.tsx

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import * as React from "react";
import Demo from "./screens/Demo";
import Hello from "./screens/hello";
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
              { name: "Jacques Jordaan" },
              { name: "Daniel Novitzkas" },
              { name: "Brandon Watkins" },
              { name: "Ryan Duell" },
              { name: "Jenner Venter" },
              { name: "Janke B Du Toit" },
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
  };
  selectWorker = (newIndex: number) => {
    this.setState({ selectedWorkerIndex: newIndex });
    console.log(
      "[onClick]",
      "selectedWorkerIndex triggered with new state:",
      this.state,
      newIndex
    );
  };

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  render() {
    const { name } = this.props;
    const { screenIndex } = this.state;
    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <>
        <div className="screen-wrapper">
          {(screenIndex === undefined || screenIndex === 0) && (
            <Home
              officeSpace={this.state.officeSpace}
              selectOfficeHandler={(index) => this.selectOffice(index)}
              selectWorkerHandler={(index) => this.selectWorker(index)}
            />
          )}
          {screenIndex === 1 && <Hello name={name}></Hello>}
          {screenIndex === 2 && <Demo></Demo>}
          {screenIndex === 3 && (
            <div className="hello">
              <div className="greeting">
                Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
              </div>
              <button onClick={this.onDecrement}>-</button>
              <button onClick={this.onIncrement}>+</button>
            </div>
          )}
        </div>
        <Paper
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
        </Paper>
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
}

export default App;

function getExclamationMarks(numChars: number) {
  return Array(Math.abs(numChars) + 1).join("!");
}
