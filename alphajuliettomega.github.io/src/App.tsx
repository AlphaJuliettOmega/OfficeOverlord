import * as React from "react";
import Demo from "./screens/Demo";
import OfficeEdit from "./screens/officeEdit";
import Home from "./screens/home";
import { Manager } from "./models/manager";
export interface Props {
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
        name: "Overlord Name",
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
