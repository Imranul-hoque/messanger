import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { UpdateSidebar } from "../redux/slice/appReducer";
import { CaretLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import Message from "./Conversations/Message";

const StartMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            boxShadow: "0 0 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack
            sx={{ p: 1.5 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebar("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Start Message</Typography>
          </Stack>
        </Box>

        {/* Body */}

        <Stack
          p={3}
          spacing={3}
          sx={{ height: "100%", flexGrow: 1, overflowY: "scroll" }}
        >
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
};

export default StartMessage;
