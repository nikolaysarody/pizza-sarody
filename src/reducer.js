const reducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            state.push(action.item);
            return state;
        case 'DELETE':
            for (let i = 0; i <= state.length; i++) {
                if (state[i].id === action.id) {
                    state.splice(i, 1);
                    break;
                }
            }
            return state;
        default:
            return state;
    }
};

export default reducer;