import React from 'react';
import {Grid, AppBar, Typography, makeStyles, Link} from '@material-ui/core';
import CustomLink from '../../ui-components/CustomLink';
import routePaths from '../../routePaths';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    justifyEnd: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexGrow: 1,
        alignItems: 'center',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    appBar: {
        'height': '130px',
        '& > *': {
            height: '100%',
        },
        'display': 'flex',
        'justifyContent': 'center',
        'boxShadow': '4px 4px 25px rgba(0, 0, 0, 0.15)',
        'padding': '0 20px',
        'flexDirection': 'row'
    },
    menuWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '20px',

    },
    activeLink: {
        color: theme.palette.yellow[500],
    },
    link: {
        margin: '0 10px',
    }
}));

const Header = () => {
    const styles = useStyles();
    return (
        <AppBar position="static" className={styles.appBar}>
            <Grid component="div" item xs={4} className={styles.logo}>
                <Typography variant="h1" color="secondary">To Do App</Typography>
            </Grid>
            <Grid component="div" item xs={8} className={styles.justifyEnd}>
                <Typography component="div" variant="body1" className={styles.menuWrapper}>
                    <Link
                        component={CustomLink}
                        to={routePaths.TASKS}
                        variant="body1"
                        color="secondary"
                        underline="none"
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Tasks
                    </Link>
                    <Link
                        component={CustomLink}
                        to={routePaths.CREATE_TASK}
                        variant="body1"
                        color="secondary"
                        underline="none"
                        className={styles.link}
                        activeClassName={styles.activeLink}
                    >
                        Create New Task
                    </Link>
                </Typography>
            </Grid>
        </AppBar>
    )
};

export default Header;