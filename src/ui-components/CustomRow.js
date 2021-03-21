import React from 'react';
import {Grid} from '@material-ui/core';


const CustomRow = props => {
    return (
        <Grid component="div" container spacing={2} alignItems="center" style={{margin: 0, width: '100%'}}>
            {props.children}
        </Grid>
    );
};

export default CustomRow;