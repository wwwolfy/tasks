import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {Button, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, makeStyles} from '@material-ui/core';
import AppLayoutView from '../application/AppLayoutView';
import {getGroups, createTask} from './apis/tasksApi';
import {taskStatuses} from './constants/taskStatuses';
import CustomRow from '../ui-components/CustomRow';
import routePaths from '../routePaths';

const statusesOptions = Object.keys(taskStatuses).map(key => {
    return taskStatuses[key];
})

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        height: '56px',
    },
}));

const CreateTaskView = () => {
    const history = useHistory();
    const styles = useStyles();
    const [taskTitle, setTaskTitle] = useState('');
    const [taskGroup, setTaskGroup] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [groupOptions, setGroupOptions] = useState([]);


    useEffect(() => {
        getGroups()
            .then(response => setGroupOptions(response))
            .catch(error => console.error(error));
    }, []);

    const saveNewTask = () => {
        createTask({
            title: taskTitle,
            group: taskGroup,
            status: taskStatus,
        })
            .then(() => history.push(routePaths.TASKS))
            .catch(error => console.error(error));
    }
    return (
        <AppLayoutView>
            <CustomRow>
                <Grid item xs={12}>
                    <Typography variant="h1" component="h1" color="primary">Add new Task</Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        id="outlined-secondary"
                        label="Task Title"
                        variant="outlined"
                        color="secondary"
                        onChange={e => setTaskTitle(e.target.value)}
                        value={taskTitle}
                        className={styles.formControl}
                    />
                </Grid>
                <Grid item xs={3}>
                    <FormControl variant="outlined" className={styles.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Group</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={taskGroup}
                            onChange={e => setTaskGroup(e.target.value)}
                            label="Group"
                        >
                            <MenuItem value="">
                                <em>Select group...</em>
                            </MenuItem>
                            {groupOptions.map(option => {
                                return (
                                    <MenuItem key={option.name} value={option.name}>{option.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl variant="outlined" className={styles.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={taskStatus}
                            onChange={e => setTaskStatus(e.target.value)}
                            label="Group"
                        >
                            <MenuItem value="">
                                <em>Select status...</em>
                            </MenuItem>
                            {statusesOptions.map(option => {
                                return (
                                    <MenuItem key={option.type} value={option.type}>{option.text}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={saveNewTask}
                        className={styles.formControl}
                    >
                        Save
                    </Button>
                </Grid>
            </CustomRow>
        </AppLayoutView>
    )
};

export default CreateTaskView;