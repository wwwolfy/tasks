import React from 'react';
import {Container, Box} from '@material-ui/core';
import Header from './view-elements/Header';

const AppLayoutView = props => {
    return (
        <Container component="div" maxWidth="lg">
            <Header />
            <Box component="main" py={10}>
                {props.children}
            </Box>
        </Container>
    )
};

export default AppLayoutView;