/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebar } from "../../redux/slice/appReducer";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlogDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Blog Contact"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure, you want to blog contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Yes</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
const DeleteDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Delete Contact"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure, you want to delete contact ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Yes</Button>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  const [blogOpen, setBlogOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const handleBlogOpen = () => {
    setBlogOpen(true);
  };

  const handleBlogClose = () => {
    setBlogOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

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
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>

        <Stack sx={{ height: "100%", flexGrow: 1, overflowY: "scroll" }}>
          <Stack direction={"row"} alignItems={"center"} spacing={3} p={3}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle1" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption" fontWeight={500}>
                {"+88 01836888149"}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
            spacing={2}
            sx={{ marginBottom: 3 }}
          >
            <Stack spacing={0.5}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="caption">Audio</Typography>
            </Stack>
            <Stack spacing={0.5}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="caption">Voice</Typography>
            </Stack>
          </Stack>
          <Divider
            width={"90%"}
            sx={{ marginLeft: "auto", marginRight: "auto" }}
          />

          <Stack spacing={1} p={3}>
            <Typography variant="subtitle1" fontWeight={300}>
              About
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              Hi There
            </Typography>
          </Stack>
          <Divider
            width={"90%"}
            sx={{ marginLeft: "auto", marginRight: "auto" }}
          />

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
          >
            <Typography variant="subtitle2">Media Links & Docs</Typography>
            <Button
              onClick={() => {
                dispatch(UpdateSidebar("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              400
            </Button>
          </Stack>
          <Stack p={3} direction={"row"} alignItems={"center"} spacing={2}>
            {[0, 1, 2, 3].map((_) => (
              <Box key={Math.random()}>
                <img src={faker.image.avatar()} alt={faker.name.firstName()} />
              </Box>
            ))}
          </Stack>
          <Divider
            width={"90%"}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star />
              <Typography variant="subtitle2">Stared Message</Typography>
            </Stack>
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebar("STARRED"));
              }}
            >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider
            width={"90%"}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell />
              <Typography variant="subtitle2">Mute Notification</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider
            width={"90%"}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Typography p={2}>1 group in common</Typography>
          <Stack p={1} direction={"row"} alignItems={"center"} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
            <Stack spacing={0.3}>
              <Typography variant="subtitle1">Imranul hoque</Typography>
              <Typography variant="subtitle2">Software developer</Typography>
            </Stack>
          </Stack>
          <Stack
            p={1}
            sx={{ marginTop: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
          >
            <Button
              onClick={() => {
                setBlogOpen(true);
              }}
              startIcon={<Prohibit />}
              fullWidth
              variant="outlined"
            >
              Block
            </Button>
            <Button
              onClick={() => {
                setDeleteOpen(true);
              }}
              startIcon={<Trash />}
              fullWidth
              variant="outlined"
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {blogOpen && <BlogDialog handleClose={handleBlogClose} open={blogOpen} />}
      {deleteOpen && (
        <DeleteDialog handleClose={handleDeleteClose} open={deleteOpen} />
      )}
    </Box>
  );
};

export default Contact;
