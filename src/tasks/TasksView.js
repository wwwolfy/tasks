import React, {useEffect, useState, Fragment} from 'react';
import {useHistory} from "react-router-dom";
import {Grid, Typography, Box} from '@material-ui/core';
import AppLayoutView from '../application/AppLayoutView';
import CustomRow from '../ui-components/CustomRow';
import TaskRow from './view-elements/TaskRow';
import TasksChart from './view-elements/TasksChart';
import {getTasks, deleteTask} from './apis/tasksApi';
import {taskStatuses} from './constants/taskStatuses';

const TasksView = () => {
    const history = useHistory();
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        getTasks()
            .then(response => setTasks(response))
            .catch(error => console.error(error));
    }, []);

    const onDelete = id => {
        deleteTask(id)
            .then(() => {
                const newTasks = tasks.filter(task => {
                    return task.id !== id;
                });
                setTasks(newTasks);
            })
            .catch(error => console.error(error));
    }

    const onUpdate = id => {
        history.push(`/task/${id}`, {id});
    };

    const tasksChartData = tasks && tasks.reduce((acc, curr) => {
        return {
            ...acc,
            [taskStatuses[curr.status].text]: acc[taskStatuses[curr.status].text] + 1
        }
    }, {
        [taskStatuses.NEW.text]: 0,
        [taskStatuses.POSTPONED.text]: 0,
        [taskStatuses.COMPLETED.text]: 0,
        [taskStatuses.SCHEDULED.text]: 0,
    });

    return (
        <AppLayoutView>
            <h1>Tasks</h1>
            {tasks ? (
                <Fragment>
                    <CustomRow>
                        <Grid item xs={2}>
                            <Typography variant="h4" color="primary">Status</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h4" color="primary">Title</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h4" color="primary">Group</Typography>
                        </Grid>
                    </CustomRow>
                    {tasks.length ? tasks.map(task => {
                        return (
                            <CustomRow key={task.id}>
                                <TaskRow task={task} on onDelete={onDelete} onUpdate={onUpdate}/>
                            </CustomRow>
                        );
                    }) : (
                        <Box component="div" mt={8}>
                            <Typography component="h1" color="primary" variant="h1" align="center">There are no tasks</Typography>
                        </Box>
                    )}
                </Fragment>
            ) : (
                <Box component="div" my={20}>
                    <Typography component="h1" color="primary" variant="h1" align="center">Loading...</Typography>
                </Box>
            )}
            {
                tasks && tasks.length > 0 && (
                    <CustomRow>
                        <TasksChart tasksData={tasksChartData}/>
                    </CustomRow>
                )
            }

        </AppLayoutView>
    )
};

export default TasksView;