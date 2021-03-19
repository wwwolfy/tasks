import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Button, Grid, Typography, TextField, makeStyles} from '@material-ui/core';
import AppLayoutView from '../application/AppLayoutView';
import CustomRow from '../ui-components/CustomRow';
import {createGroup} from './apis/tasksApi';
import routePaths from '../routePaths';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        height: '56px',
    },
}));

const CreateGroupView = () => {
    const history = useHistory();
    const styles = useStyles();
    const [name, setName] = useState('');
    const saveNewGroup = () => {
        createGroup({name})
            .then(() => history.push(routePaths.TASKS))
            .catch(error => console.error(error))
    }
    return (
        <AppLayoutView>
            <CustomRow>
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
                        className={styles.formControl}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={saveNewGroup}
                        className={styles.formControl}
                    >
                        Save
                    </Button>
                </Grid>
            </CustomRow>
        </AppLayoutView>
    )
};

export default CreateGroupView;