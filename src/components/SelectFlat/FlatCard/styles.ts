import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

export const useStyles = makeStyles<Theme>((theme) => ({
  flatCard: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.grey["500"]}`,
    borderRadius: '5px',
  },

  flatCardText: {
    marginBottom: `${theme.spacing(1)} !important`
  },

  checkboxContainer: {
    width: '100%',
    textAlign: 'right',
    '& label': {
      marginRight: `${0} !important`
    }
  }

}));
