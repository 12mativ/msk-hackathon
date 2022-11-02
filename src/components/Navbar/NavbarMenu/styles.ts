import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles<Theme>((theme) => ({
  menuButton: {
    color: theme.palette.common.white + "!important",
    borderRadius: "0!important",
    height: "64px",
    "&:hover": {
      color: theme.palette.common.white + "!important",
      backgroundColor: theme.palette.primary.light + "!important"
    }
  },
}));
