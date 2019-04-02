
const submitPlayer = (state, action) => ({...state, ...action})


const addToPlayers = (state) => {
    return {...state, players: [...state.players, 
        { name:state.playerName, skill:state.playerSkillLevel, position:state.playerPosition} ]}
}


const reducers = (state, action) => {
    switch (action.type) {
        case "submit": return addToPlayers(submitPlayer(state, action));
        default: return state;
    }
};

export default reducers;