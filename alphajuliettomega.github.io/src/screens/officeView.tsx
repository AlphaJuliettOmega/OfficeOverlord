import * as React from "react";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class officeView extends React.Component<Props, State> {}
