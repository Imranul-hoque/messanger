import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";

const MainLayout = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Stack spacing={3}>
        <Stack
          sx={{
            width: "100%",
          }}
          direction={"column"}
          alignItems={"center"}
        >
          <img style={{ height: 100, width: 100 }} src={logo} alt="logo" />
        </Stack>
      </Stack>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
