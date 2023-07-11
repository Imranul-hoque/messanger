import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chart from "./Chart";
import Conversation from "../../components/Conversations";
import Contact from "./Contact";
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

      {sidebar.open && <Contact />}
    </Stack>
  );
};

export default GeneralApp;
