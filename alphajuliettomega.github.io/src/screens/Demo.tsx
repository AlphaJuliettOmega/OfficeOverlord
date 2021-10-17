import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import {
  Card,
  Avatar,
  Stack,
  Typography,
  IconButton,
  Divider,
  Chip,
  Switch,
} from "@mui/material";
// import { purple, grey } from '@mui/material/colors';
import Box from "@mui/material/Box";
import { Edit, LocationOn } from "@mui/icons-material";
// import { NeuButton, NeuProgress } from "neumorphism-react";
// import { NeuTextInput } from "neumorphism-react";
export const theme = {
  colors: {
    text: "#020202",
    grey: "#969EA8",
    highlight: "#489DDA",
    dark: "#F8FAFC",
    darkest: "#0D4477",
  },
};

function Room() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 1, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 1, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={theme.colors.grey} />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color={theme.colors.dark} />
    </mesh>
  );
}

function logger(e = "no value") {
  console.log("Logger : ", e);
}

class Demo extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <NeuButton
          width="150px"
          height="100px"
          onClick={logger}
          color={theme.colors.highlight}
          distance={3}
          radius={3}
        />
        <NeuButton
          width="150px"
          height="100px"
          radius={2}
          distance={2}
          onClick={logger}
          color={theme.colors.highlight}
          onMouseUp={() => alert("on mouse up !")}
          style={{
            border: "2px dashed #929292",
            color: "white",
            fontSize: "1.2rem",
          }}
        >
          Button with custom styles and props
        </NeuButton>
        <NeuProgress progress={15} color="#6a8d88" radius={1} />
        <NeuTextInput
          placeholder="Placeholder you want"
          color={theme.colors.text}
          onChange={logger}
        />
        <br />
        <br />
        <br />
        <br />
        <NeuTextInput
          placeholder="Type some text"
          color={theme.colors.darkest}
          onChange={logger}
          width="500px"
          height="40px"
          distance={2}
          fontSize={15}
          fontColor={theme.colors.text}
        /> */}
        <Card>
          <div>
            <Avatar variant="rounded" src="https://placekitten.com/200/300" />
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>Michael Scott</Typography>
              <Typography variant="body2" color="text.secondary">
                <LocationOn sx={{ color: theme.colors.grey }} /> Scranton, PA
              </Typography>
            </Stack>
            <IconButton>
              <Edit sx={{ fontSize: 14 }} />
            </IconButton>
          </div>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: "background.default" }}
          >
            <Chip />
            <Switch />
          </Stack>
        </Card>
        {/* <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.4} />
          <Sky />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <Physics>
            <Room></Room>
            <Plane></Plane>
          </Physics>
        </Canvas> */}
      </div>
    );
  }
}

export default Demo;
