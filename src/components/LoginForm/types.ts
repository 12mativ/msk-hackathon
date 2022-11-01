import React, { ChangeEvent } from "react";

export interface LoginFormProps {
  width?: string | number;
  height?: string | number;
}

export interface LoginFormViewProps {
  width?: string | number;
  height?: string | number;
  login: string;
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export interface LoginFormState {
  login: string;
  password: string;
}
