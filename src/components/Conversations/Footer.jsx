import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Stack,
  Fab,
  Tooltip,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const StyledInput = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    PaddingBottom: "12px !important",
  },
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 52,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 122,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 192,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 262,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 332,
    title: "Contact",
  },
];

// eslint-disable-next-line react/prop-types
const ChatInput = ({ setOpen }) => {
  const [fabToggle, setFabToggle] = useState(false);

  return (
    <StyledInput
      fullWidth
      placeholder="write a message?"
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack
              sx={{
                position: "relative",
                display: fabToggle ? "inline" : "none",
              }}
            >
              {Actions.map((el) => {
                return (
                  <Tooltip
                    key={Math.random()}
                    title={el.title}
                    arrow
                    placement="right"
                  >
                    <Fab
                      sx={{
                        position: "absolute",
                        bottom: el.y,
                        backgroundColor: el.color,
                      }}
                    >
                      {" "}
                      {el.icon}{" "}
                    </Fab>
                  </Tooltip>
                );
              })}
            </Stack>
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setFabToggle((prev) => !prev);
                }}
              >
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={() => setOpen((prev) => !prev)}>
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <Box
      p={1}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Stack width={"100%"}>
          <Box
            sx={{
              zIndex: 10,
              display: open ? "inline" : "none",
              position: "fixed",
              bottom: 84,
              right: 80,
            }}
          >
            <Picker theme={theme.palette.mode} data={data} />
          </Box>
          <ChatInput setOpen={setOpen} />
        </Stack>
        <Box
          sx={{
            width: 48,
            height: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ width: "100%", height: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
