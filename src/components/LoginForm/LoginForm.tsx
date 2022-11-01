import React, { ChangeEvent, useState } from "react";
import { LoginFormProps, LoginFormState } from "./types";
import LoginFormView from "./LoginFormView";

function LoginForm({ width = "100%", height }: LoginFormProps) {
  const [form, setForm] = useState<LoginFormState>({ login: "", password: "" });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <LoginFormView
      login={form.login}
      password={form.password}
      onChange={changeHandler}
      onSubmit={submitHandler}
      width={width}
      height={height}
    />
  );
}

export default LoginForm;
