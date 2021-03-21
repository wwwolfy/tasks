import React, {Fragment} from 'react';
import {Button, Grid, Typography, Box, makeStyles} from '@material-ui/core';
import {taskStatuses} from '../constants/taskStatuses';

const useStyles = makeStyles((theme) => ({
    boxBlue: {
        background: theme.palette.statuses.blue,
    },
    boxGreen: {
        background: theme.palette.statuses.green,
    },
    boxRed: {
        background: theme.palette.statuses.red,
    },
    boxGrey: {
        background: theme.palette.statuses.grey,
    }
}));

const TaskRow = ({task, onDelete, onUpdate}) => {
    const styles = useStyles();
    return (
        <Fragment>
            <Grid item xs={2}>
                <Box className={styles[taskStatuses[task.status].class]}>
                    <Typography variant="body1" color="secondary">{taskStatuses[task.status].text}</Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body1" color="primary">{task.title}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="body1" color="primary">{task.group}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() =>{onUpdate(task.id)}}
                >
                    Update
                </Button>
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={() =>{onDelete(task.id)}}
                >
                    Delete
                </Button>
            </Grid>
        </Fragment>
    )
};

export default TaskRow;