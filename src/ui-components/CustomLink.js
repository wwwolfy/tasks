import React from 'react';
import {NavLink} from 'react-router-dom';

const CustomLink = React.forwardRef((props, ref) => {
    return (
        <NavLink {...props} ref={ref} />
    );
});

export default CustomLink;