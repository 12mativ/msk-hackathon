import React from "react";
import {AppBar, IconButton, Toolbar,} from "@mui/material";
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import {NavbarMenu} from "./NavbarMenu";


// @ts-ignore
function Navbar({theme}) {
    const IconButtonStylesMargin = [{
        color: 'white',
        borderRadius: '0',
        height: '64px',
        edge: 'start',
        flex: '0 0 5%',
        marginLeft: theme.spacing('auto'),
        '&:hover': {color: '#1976d2', backgroundColor: '#fff'}
    }]

    const IconButtonStyles = [{
        color: 'white',
        borderRadius: '0',
        height: '64px',
        edge: 'start',
        flex: '0 0 5%',
        '&:hover': {color: '#1976d2', backgroundColor: '#fff'}
    }]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">

                <Toolbar>
                    <NavbarMenu />

                    <IconButton sx={IconButtonStyles}>
                        <PercentOutlinedIcon/>
                    </IconButton>

                    <IconButton sx={IconButtonStylesMargin}>
                        <SettingsIcon/>
                    </IconButton>

                    <IconButton sx={IconButtonStyles}>
                        <PersonIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>

    );
}
export default Navbar;