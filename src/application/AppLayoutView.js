import React from 'react';
import {Container} from '@material-ui/core';
import Header from './view-elements/Header';

const AppLayoutView = props => {
    return (
        <Container component="div" maxWidth="lg">
            <Header />
            <main>
                {props.children}
            </main>
        </Container>
    )
};

export default AppLayoutView;