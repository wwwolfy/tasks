import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import {Button, Grid, Box, Typography, TextField} from '@material-ui/core';
import AppLayoutView from '../application/AppLayoutView';
import {createGroup} from './apis/tasksApi';
import routePaths from '../routePaths';

const CreateGroupView = ({history}) => {

    const [name, setName] = useState('');
    const saveNewGroup = () => {
        createGroup({name})
            .then(() => history.push(routePaths.TASKS))
            .catch(error => console.error(error))
    }
    return (
        <AppLayoutView>
            <Grid item xs={12}>
                <Typography variant="h1" component="h1" color="primary">Add new Group</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    id="outlined-secondary"
                    label="Group Name"
                    variant="outlined"
                    color="secondary"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </Grid>
            <Grid item xs={2}>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={saveNewGroup}
                >
                    Save
                </Button>
            </Grid>
        </AppLayoutView>
    )
};

export default withRouter(CreateGroupView);