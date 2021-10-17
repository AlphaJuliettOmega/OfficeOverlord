import * as React from "react";
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
import { Edit, LocationOn } from "@mui/icons-material";
export const theme = {
  colors: {
    text: "#020202",
    grey: "#969EA8",
    highlight: "#489DDA",
    dark: "#F8FAFC",
    darkest: "#0D4477",
  },
};

class Demo extends React.Component {
  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default Demo;
