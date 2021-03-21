const {
    REACT_APP_API_URL,
    REACT_APP_NEW_TASK_API_URL,
    REACT_APP_COMPLETED_TASK_API_URL,
} = process.env;

const config = {
    API_URL: REACT_APP_API_URL,
    SLACK_NEW_TASK_API_URL: REACT_APP_NEW_TASK_API_URL,
    SLACK_COMPLETED_API_URL: REACT_APP_COMPLETED_TASK_API_URL,
    ENDPOINTS: {
        TASKS: '/tasks',
        GROUPS: '/groups',
    },
};

export default config;