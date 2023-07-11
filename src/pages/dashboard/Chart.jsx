import {
  Box,
  Typography,
  IconButton,
  Stack,
  alpha,
  InputBase,
  Button,
  Divider,
  Badge,
  Avatar,
} from "@mui/material";
import { Archive, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { ChatList } from "../../data/index";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { styled, useTheme } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// eslint-disable-next-line react/prop-types, no-unused-vars
const ChatElement = ({ img, name, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
        borderRadius: 1,
        width: "100%",
        padding: 2,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={img} />
          )}
          <Stack spacing={0.5}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} alignItems={"center"}>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {time}
          </Typography>
          <Badge badgeContent={2} color="primary"></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Chart = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0 0 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chat</Typography>
          <IconButton>
            <CircleDashed size={32} />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search here?" />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <Archive size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>

        <Stack
          spacing={2}
          direction={"column"}
          sx={{ flexGrow: 1, height: "100%", overflow: "scroll" }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack direction={"column"} spacing={1.5}>
              <Typography sx={{ color: "#676767" }}>Pined</Typography>
              {ChatList.filter((el) => el.pinned).map((el, i) => {
                return <ChatElement key={i} {...el} />;
              })}
            </Stack>
            <Stack direction={"column"} spacing={1.5}>
              <Typography sx={{ color: "#676767" }}>All Chats</Typography>
              {ChatList.filter((el) => !el.pinned).map((el, i) => {
                return <ChatElement key={i} {...el} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chart;
