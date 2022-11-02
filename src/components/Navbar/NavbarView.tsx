import React from "react";
import {AppBar, IconButton, Toolbar,} from "@mui/material";
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import {NavbarMenu} from "./NavbarMenu/NavbarMenu";
import {useStyles} from "./styles";
import {NavbarProps} from "./types";

function NavbarView({width, height}: NavbarProps) {
    const classes = useStyles({ width, height });
    return (

        <AppBar position="static" className={classes.navbarContainer}>
            <Toolbar className={classes.navbar}>
                <Box className={classes.iconsContainer}>
                    <NavbarMenu />

                    <IconButton className={classes.menuIcon}>
                        <PercentOutlinedIcon/>
                    </IconButton>
                </Box>

                <Box className={classes.iconsContainer} sx={{textAlign: "right"}}>
                    <IconButton className={classes.menuIcon}>
                        <SettingsIcon/>
                    </IconButton>

                    <IconButton className={classes.menuIcon}>
                        <PersonIcon/>
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>


    );
}
export default NavbarView