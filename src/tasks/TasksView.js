import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AppLayoutView from '../application/AppLayoutView';

const TasksView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'TEST_ACTION'});
    }, [dispatch]);

    return (
        <AppLayoutView>
            <h1>Tasks View</h1>
        </AppLayoutView>
    )
};

export default TasksView;