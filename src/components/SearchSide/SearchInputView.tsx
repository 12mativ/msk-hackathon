import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {SearchSideProps} from "./types";
import {useStyles} from "./styles";
import {Box} from "@mui/material";

function SearchInputView({setSearchText, searchText, onChange, onSubmit}: SearchSideProps) {
  const classes = useStyles()
  return (
    <Box component={'form'} className={classes.searchContainer} onSubmit={onSubmit}>
      <TextField
        className={classes.searchInput}
        type={"text"}
        name={"search"}
        value={searchText}
        label="Поиск"
        variant='standard'
        placeholder="Поиск..."
        size="small"
        onChange={onChange}
      />
      <div>
        <IconButton onClick={() => setSearchText('')}>
          <ClearOutlinedIcon />
        </IconButton>

        <IconButton type="submit">
          <SearchIcon/>
        </IconButton>
      </div>

    </Box>
  )
}

export default SearchInputView