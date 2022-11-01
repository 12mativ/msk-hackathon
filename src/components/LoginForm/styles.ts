import { makeStyles } from "@mui/styles";
import { LoginFormProps } from "./types";
import { Theme } from "@mui/material";

export const useStyles = makeStyles<Theme>((theme) => ({
  loginForm: {
    padding: theme.spacing(4),
    width: ({ width }: LoginFormProps) => width,
    height: ({ height }: LoginFormProps) => height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "&>*": {
      marginBottom: theme.spacing(3) + "!important",
    },
  },
  fullContainer: { width: "100%", maxWidth: "528px" },
}));
