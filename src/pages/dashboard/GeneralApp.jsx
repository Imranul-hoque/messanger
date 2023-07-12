import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chart from "./Chart";
import Conversation from "../../components/Conversations";
import Contact from "./Contact";
import SharedMesssage from "../../components/SharedMesssage";
import StartMessage from "../../components/StartMessage";

import { useSelector } from "react-redux";
const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((state) => state.app);
  return (
    <Stack direction={"row"}>
      <Chart />
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
      >
        <Conversation />
      </Box>

      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "SHARED":
              return <SharedMesssage />;
            case "STARRED":
              return <StartMessage />;
            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
