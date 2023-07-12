import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { UpdateSidebar } from "../redux/slice/appReducer";
import { CaretLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Shared_docs, Shared_links } from "../data";
import { DocMsg, Linkmsg } from "./Conversations/MessageTypes";

const SharedMesssage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Typography variant="subtitle2">Shared Message</Typography>
          </Stack>
        </Box>

        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Doc" />
        </Tabs>

        {/* Body */}

        <Stack
          p={3}
          spacing={3}
          sx={{ height: "100%", flexGrow: 1, overflowY: "scroll" }}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5, 6].map((_) => {
                      return (
                        <Grid key={Math.random()} xs={4} item>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.fullName()}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              case 1:
                return Shared_links.map((el) => (
                  <Linkmsg key={Math.random()} el={el} menu={"menu"} />
                ));
              case 2:
                return Shared_docs.map((el) => (
                  <DocMsg key={Math.random()} el={el} menu={"menu"} />
                ));
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMesssage;
