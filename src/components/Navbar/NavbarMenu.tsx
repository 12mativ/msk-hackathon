import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {IconButton} from "@mui/material";

export const NavbarMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const IconButtonStyles = [{
        color: 'white',
        borderRadius: '0',
        height: '64px',
        edge: 'start',
        flex: '0 0 5%',
        '&:hover': {color: '#1976d2', backgroundColor: '#fff'}
    }]

    return (
        <div>
            <IconButton sx={IconButtonStyles}
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
            >
                <FolderOutlinedIcon />
                <KeyboardArrowDownIcon />
            </IconButton>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose}>Импортировать</MenuItem>
                <MenuItem onClick={handleClose}>Скачать</MenuItem>
            </Menu>
        </div>
    );
}
