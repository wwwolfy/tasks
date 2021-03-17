// import Immutable from 'immutable';
import * as tasksActionTypes from './tasksActionTypes';

const initialState = {
    test: null,

};

// const setUsersData = usersDTO => {
//     let isLeader = true;
//     let users = Immutable.OrderedMap();
//     let usersIds = [];
//     usersDTO.forEach(userDTO => {
//         const userDTOWithLeader = {...userDTO, isLeader};
//         const user = new User({}).fromDTO(userDTOWithLeader);
//         if (user.id) {
//             users = users.set(user.id, user);
//             usersIds = [...usersIds, user.id];
//         }
//         isLeader = false;
//     });
//     return {users, usersIds};
// };

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case tasksActionTypes.TEST_ACTION: {
            state = {
                ...state,
                test: 'Ovo je uspelo',
            };
            break;
        }
    }
    return state;
};

export default tasksReducer;