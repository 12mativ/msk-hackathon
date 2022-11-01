import React from "react";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";
import { useStyles } from "./styles";
import { LoginFormViewProps } from "./types";

function LoginFormView({
  login,
  password,
  onChange,
  onSubmit,
  width,
  height,
}: LoginFormViewProps) {
  const classes = useStyles({ width, height });

  return (
    <Box component={"form"} className={classes.loginForm} onSubmit={onSubmit}>
      <Avatar sx={{ bgcolor: "primary.main" }}>
        <Person />
      </Avatar>
      <Typography variant={"h5"}>Авторизация</Typography>
      <TextField
        className={classes.fullContainer}
        label={"Логин"}
        type={"text"}
        name={"login"}
        onChange={onChange}
        value={login}
      />
      <TextField
        className={classes.fullContainer}
        label={"Пароль"}
        type={"password"}
        name={"password"}
        onChange={onChange}
        value={password}
      />
      <Button
        type={"submit"}
        className={classes.fullContainer}
        variant={"contained"}
      >
        Войти
      </Button>
    </Box>
  );
}

export default LoginFormView;
