import React from 'react'
import {AppBar, Button, createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        bck: {
            background: 'orange',
        },
    }),
);


function HeaderBlock() {
    const classes: any = useStyles();
    return(
        <AppBar position="static">
            <Toolbar className={classes.bck}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Crypto-XS
                </Typography>

            </Toolbar>
        </AppBar>
    )

}
export default HeaderBlock;
