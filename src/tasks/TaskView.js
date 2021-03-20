import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Button, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, makeStyles, Box} from '@material-ui/core';
import AppLayoutView from '../application/AppLayoutView';
import {getGroups, createTask, getTask, updateTask, newTaskSendNotification, completedTaskSendNotifications} from './apis/tasksApi';
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

const TaskView = () => {
    const history = useHistory();
    const {id} = useParams();
    const styles = useStyles();
    const [taskTitle, setTaskTitle] = useState('');
    const [taskGroup, setTaskGroup] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [groupOptions, setGroupOptions] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);


    useEffect(() => {
        getGroups()
            .then(response => setGroupOptions(response))
            .catch(error => console.error(error));

        if (id) {
            getTask(id)
                .then(response => {
                    setTaskGroup(response.group);
                    setTaskTitle(response.title);
                    setTaskStatus(response.status);
                    if (response.status === taskStatuses.COMPLETED.type) {
                        setIsCompleted(true);
                    }
                })
                .catch(error => console.error(error))
        }

    }, [id]);

    const saveNewTask = async () => {
        try {
            await createTask({
                title: taskTitle,
                group: taskGroup,
                status: taskStatuses.NEW.type,
            });
            await newTaskSendNotification('New task created');
        } catch (e) {
            console.error(e)
        }

        history.push(routePaths.TASKS);
    };

    const onUpdateTask = async (id) => {
        try {
            const response = await updateTask({
                id,
                title: taskTitle,
                group: taskGroup,
                status: taskStatus,
            });
            if (!isCompleted && response.status === taskStatuses.COMPLETED.type) {
                await completedTaskSendNotifications(`Task ${taskTitle} is completed`);
            }
        } catch (e) {
            console.error(e);
        }
        history.push(routePaths.TASKS)
    };

    return (
        <AppLayoutView>
            {groupOptions ? (
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
                    {id && (
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
                    )}
                    <Grid item xs={3}>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => id ? onUpdateTask(id) : saveNewTask()}
                            className={styles.formControl}
                        >
                            {id ? 'Update' : 'Save'}
                        </Button>
                    </Grid>
                </CustomRow>
            ) : (
                <Box component="div" my={20}>
                    <Typography component="h1" color="primary" variant="h1" align="center">Loading...</Typography>
                </Box>
            )}
        </AppLayoutView>
    )
};

export default TaskView;