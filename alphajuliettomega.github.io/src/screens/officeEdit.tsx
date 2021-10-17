// src/components/StatefulHello.tsx

import { EditOutlined } from "@mui/icons-material";
import { Card, Stack, Avatar, Typography, IconButton } from "@mui/material";
import * as React from "react";
import { Manager } from "../models/manager";
import { Office } from "../models/office";
import { OfficeWorker } from "../models/worker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  officeSpace: Manager;
  selectedOfficeIndex: number | undefined;
  back: () => void;
}

interface State {
  currentEnthusiasm: number;
}

class OfficeEdit extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  workerView = () => {
    if (this.props.selectedOfficeIndex !== undefined) {
      return this.props.officeSpace.offices[
        this.props.selectedOfficeIndex
      ].workers.map((worker: OfficeWorker) => {
        return (
          <Card className="card-worker">
            <Stack direction="row" justifyContent="space-between">
              <Avatar
                variant="rounded"
                src="https://placekitten.com/300/300"
                className="avatar-worker"
              />
              <Stack spacing={0.5} justifyContent="flex-start">
                <Typography className="card-worker-heading" fontWeight={700}>
                  {worker.name}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                      <LocationOn sx={{ color: theme.colors.grey }} /> Scranton,
                      PA
                    </Typography> */}
              </Stack>
              <IconButton className="button-edit">
                <EditOutlined sx={{ fontSize: 14 }} />
              </IconButton>
            </Stack>
          </Card>
        );
      });
    } else return <p>No Office selected</p>;
  };

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }
    return (
      <div className="App">
        <header className="App-header">
          <ArrowBackIcon
            sx={{ fontSize: 30, color: "#489DDA" }}
            onClick={() => this.props.back()}
          ></ArrowBackIcon>
          <div className="hello">
            <h2>Staff Members In Office</h2>
            {this.workerView()}
            <div className="greeting">
              Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
            </div>
            <button onClick={this.onDecrement}>-</button>
            <button onClick={this.onIncrement}>+</button>
          </div>
        </header>
      </div>
    );
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

export default OfficeEdit;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
