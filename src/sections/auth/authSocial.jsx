import { Divider, IconButton, Stack } from "@mui/material";
import { GithubLogo, GoogleLogo, TwitterLogo } from "phosphor-react";
import React from "react";

const AuthSoical = () => {
  return (
    <>
      <Divider
        sx={{
          color: "text.disabled",
          my: 2.5,
          typography: "overline",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1.5}
      >
        <IconButton>
          <GoogleLogo color="#DF3E30" />
        </IconButton>
        <IconButton>
          <GithubLogo />
        </IconButton>
        <IconButton>
          <TwitterLogo color="#1C9CEA" />
        </IconButton>
      </Stack>
    </>
  );
};

export default AuthSoical;
