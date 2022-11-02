import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles<Theme>((theme) => ({
  selectLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    paddingTop: theme.spacing(0),
    borderTop: `1px solid ${theme.palette.grey["500"]}`,
    borderBottom: `1px solid ${theme.palette.grey["500"]}`,
    '& label': {
      marginRight: `${0} !important`
    }
  }
}));
