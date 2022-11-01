import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import TextField from "@mui/material/TextField";


export const SearchInput = () => {
    const [searchText, setSearchText] = useState('')
    return (
        <form style={{display: 'flex', flexWrap: 'wrap'}}>
            <TextField
                sx={{marginRight: '1%'}}
                value={searchText}
                id="search-bar"
                className="text"
                label="Поиск"
                variant="outlined"
                placeholder="Поиск..."
                size="small"
                onChange={e => setSearchText(e.target.value)}
            />
            <div>
                <IconButton>
                    <ClearOutlinedIcon style={{fill: "#000000"}} onClick={() => setSearchText('')}/>
                </IconButton>

                <IconButton type="submit">
                    <SearchIcon style={{fill: "#000000"}}/>
                </IconButton>
            </div>

        </form>
    )
};

