import { Button } from "@mui/material";
import * as React from "react";
export interface Props {
  existingWorker?: Worker;
}

interface State {
  currentStep: number;
}
class StaffCreator extends React.Component<Props, State> {
  render() {
    return (
      <>
        <p>New Staff Member</p>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Step Indicator</p>
        <Button>
          <p>NEXT</p>
        </Button>
      </>
    );
  }
}
export default StaffCreator;
