import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

export const useStyles = makeStyles<Theme>((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },

  searchInput: {
    flex: '0 1 70%',
    [theme.breakpoints.down('md')]: {
      flex: '0 1 60%'
    },

  }
}));
