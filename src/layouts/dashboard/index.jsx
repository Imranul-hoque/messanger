import { useTheme, styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
} from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Gear } from "phosphor-react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const DashboardLayout = () => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();

  const [selected, setSelcted] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction="row" sx={{ position: "relative" }}>
        <Box
          py={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            height: "100vh",
            width: 100,
          }}
        >
          <Stack
            direction="column"
            alignItems={"center"}
            sx={{ height: "100%" }}
            justifyContent="space-between"
            spacing={3}
          >
            <Stack alignItems="center" spacing={2}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  width: 64,
                  height: 64,
                  borderRadius: 1.5,
                }}
              >
                <img src={Logo} alt={"Logo images"} />
              </Box>

              <Stack
                width="max-content"
                direction="column"
                alignItems="center"
                spacing={3}
              >
                {Nav_Buttons.map((el) =>
                  el.index === selected ? (
                    <Box
                      p={1}
                      key={el.index}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton
                        onClick={() => setSelcted(el.index)}
                        sx={{
                          color:
                            theme.palette.mode === "light"
                              ? "#fff"
                              : theme.palette.text.main,
                        }}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => setSelcted(el.index)}
                      key={el.index}
                      sx={{
                        color:
                          theme.palette.mode === "light"
                            ? "#000"
                            : theme.palette.text.main,
                      }}
                    >
                      {el.icon}
                    </IconButton>
                  )
                )}

                <Divider light />
                {selected === 3 ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      onClick={() => setSelcted(3)}
                      sx={{
                        color:
                          theme.palette.mode === "light"
                            ? "#fff"
                            : theme.palette.text.main,
                      }}
                    >
                      <Gear />
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton onClick={() => setSelcted(3)}>
                    <Gear />
                  </IconButton>
                )}
              </Stack>
            </Stack>
            <Stack alignItems="center" spacing={3}>
              <AntSwitch
                onChange={() => {
                  onToggleMode();
                }}
              />
              <Avatar
                src={faker.image.avatar()}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                {Profile_Menu.map((el) => {
                  return (
                    <MenuItem key={Math.random()} onClick={handleClose}>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        spacing={2}
                      >
                        <span>{el.title}</span>
                        {el.icon}
                      </Stack>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Stack>
          </Stack>
        </Box>
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
