import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import ShortcutDialog from "../../sections/settings/ShortcutDialog";
import { useState } from "react";

const Settings = () => {
  const theme = useTheme();
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortCuts = () => {
    setOpenShortcuts(true);
  };

  const handelCloseShortCuts = () => {
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortCuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }} height={"100vh"}>
        <Box
          sx={{
            overflowY: "scroll",
            width: "320px",
            height: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.paper,

            boxShadow: "0 0 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={3} spacing={5}>
            {/* header section start */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretRight />
              </IconButton>

              <Typography variant="h6">Settings</Typography>
            </Stack>
            {/* header section end */}

            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <Avatar
                sx={{ width: 56, height: 56 }}
                src={faker.image.avatar()}
                alt={faker.name.fullName()}
              />
              <Stack spacing={0.3}>
                <Typography variant="subtitle2">Imranul Hoque </Typography>
                <Typography variant="subtitle2">Software developer</Typography>
              </Stack>
            </Stack>

            <Stack spacing={4}>
              {list.map(({ key, icon, title, onclick }) => {
                return (
                  <>
                    <Stack spacing={2} onClick={onclick}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={3}
                      >
                        {icon}
                        <Typography variant="caption">{title}</Typography>
                      </Stack>
                      {key !== 7 && <Divider />}
                    </Stack>
                  </>
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {openShortcuts && (
        <ShortcutDialog
          open={openShortcuts}
          handleClose={handelCloseShortCuts}
        />
      )}
    </>
  );
};

export default Settings;
