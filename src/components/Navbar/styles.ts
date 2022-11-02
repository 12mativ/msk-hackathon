import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import {NavbarProps} from "./types";

export const useStyles = makeStyles<Theme>((theme) => ({
  navbarContainer: {
    marginBottom: theme.spacing(3)
  },

  navbar: {
    width: ({ width }: NavbarProps) => width,
    height: ({ height }: NavbarProps) => height,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconsContainer: {
    flex: '0 1 50%'
  },

  menuIcon: {
    color: theme.palette.common.white + "!important",
    borderRadius: "0!important",
    height: "64px",
    padding: theme.spacing(2) + '!important',
    "&:hover": {
      color: theme.palette.common.white + "!important",
      backgroundColor: theme.palette.primary.light + "!important"
    }
  }

}));
