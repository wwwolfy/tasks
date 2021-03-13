import React from 'react';
import {Container} from '@material-ui/core';

const AppLayoutView = props => {
    return (
        <Container component="div" maxWidth="lg">
            <header>
                <h1>Tasks App</h1>
            </header>
            <main>
                {props.children}
            </main>
        </Container>
    )
};

export default AppLayoutView;