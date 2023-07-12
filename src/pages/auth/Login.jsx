import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthSoical from "../../sections/auth/authSocial";
import AuthLoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2">Login Here</Typography>
      <Stack direction={"row"} alignItems={"cener"} spacing={0.5}>
        <Typography variant="subtitle2">New user ?</Typography>
        <Link component={RouterLink} to={"/auth/register"}>
          Create an Account
        </Link>
      </Stack>
      <Stack spacing={2}>
        <AuthLoginForm />
        <AuthSoical />
      </Stack>
    </Stack>
  );
};

export default Login;
