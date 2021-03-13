import React from 'react';

const AppLayoutView = props => {
    return (
        <div className="container">
            <header>
                <h1>Tasks App</h1>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
};

export default AppLayoutView;