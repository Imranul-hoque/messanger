import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../../redux/slice/appReducer";

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

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
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
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          onClick={() => dispatch(ToggleSidebar())}
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{ cursor: "pointer" }}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt={"simple Image"} src={faker.image.avatar()} />
          </StyledBadge>
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            <Typography variant="subtitle2">
              {faker.name.firstName()}
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />

          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
