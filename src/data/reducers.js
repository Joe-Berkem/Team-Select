
const submitPlayer = (state, action) => ({...state, ...action})


const addToPlayers = (state) => {
    return {...state, players: [...state.players, `${state.playerName}, ${state.playerSkillLevel}, ${state.playerPosition}`]}
}


const reducers = (state, action) => {
    switch (action.type) {
        case "submit": return addToPlayers(submitPlayer(state, action));
        default: return state;
    }
};

export default reducers;