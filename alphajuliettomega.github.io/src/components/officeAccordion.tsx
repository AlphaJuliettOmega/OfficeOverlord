import { EditOutlined } from "@mui/icons-material";
import {
  Card,
  Stack,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { Office } from "../models/office";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import GroupIcon from "@mui/icons-material/Group";
function OfficeAccordion(props: {
  office: Office;
  index: number;
  selectOfficeHandler: (newIndex: number) => void;
}) {
  return (
    <Card className="card-office">
      <div className="card-highlight"></div>
      <Stack direction="row" justifyContent="space-between">
        <Stack spacing={0.5} paddingBottom={"10px"}>
          <Typography fontWeight={800} fontSize={30}>
            {props.office.name}
          </Typography>
          <Typography fontWeight={500} flexDirection="row">
            <GroupIcon
              sx={{
                fontSize: 20,
                color: "#489DDA",
                marginTop: "-3px",
                marginRight: 1,
                verticalAlign: "middle",
              }}
            ></GroupIcon>
            <Typography fontWeight={800} display="inline">
              {props.office.officeCapacity + " "}
            </Typography>
            Staff Members in Office
          </Typography>
        </Stack>
        <IconButton
          className="button-edit"
          onClick={() => {
            props.selectOfficeHandler(props.index);
          }}
        >
          <EditOutlined sx={{ fontSize: 30, color: "#489DDA" }} />
        </IconButton>
      </Stack>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ px: 2, py: 1, bgcolor: "background.default" }}
      >
        <Button>
          <p>More info</p>
          <KeyboardArrowDownOutlinedIcon
            sx={{ fontSize: 30, color: "#489DDA" }}
          ></KeyboardArrowDownOutlinedIcon>
        </Button>
        {/* <Chip />
                <Switch /> */}
      </Stack>
    </Card>
  );
}
export default OfficeAccordion;
