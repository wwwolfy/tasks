import {createMuiTheme} from '@material-ui/core/styles';
import typographyConfig from './typography';
import {blue, grey, yellow} from './colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: blue[500],
            main: blue[800],
            dark: blue[900],
            contrastText: '#fff',
        },
        secondary: {
            main: blue[50],
            contrastText: blue[800],
        },
        action: {
            active: blue[800],
            hover: blue[500],
            selected: blue[500],
            disabled: '#fff',
            disabledBackground: grey[300],
        },
        text: {
            primary: blue[800],
            secondary: grey[800],
        },
        blue: {
            ...blue,
        },
        grey: {
            ...grey,
        },
        yellow: {
            ...yellow,
        },
        statuses: {
            red: 'red',
            grey: grey[800],
            blue: blue[500],
            green: 'green',
        }
    },
    typography: typographyConfig,
    shadows: [
        'none',
        '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
        '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
        '0px 3px 3px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
        '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.12), 0px 1px 10px rgba(0, 0, 0, 0.2)',
        '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)',
        '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2)',
        '0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 5px 6px rgba(0, 0, 0, 0.2)',
        '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
        '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
        '0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)',
    ],
});

export default theme;