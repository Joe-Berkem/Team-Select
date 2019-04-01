const submitPlayer = (state, action) => ({...state.players, ...action})


const reducers = (state, action) => {
    switch (action.type) {
        case "submit": return submitPlayer(state, action);
        default: return state;

    }
};

export default reducers;