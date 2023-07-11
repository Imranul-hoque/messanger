import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import { useTheme } from "@mui/material/styles";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
          height: "100%",
          overflow: "scroll",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Message />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
