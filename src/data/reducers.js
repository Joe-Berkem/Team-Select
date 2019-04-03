
const submitPlayer = (state, action) => ({...state, ...action})


const addToPlayers = (state) => {
    return {...state, players: [...state.players, 
        { name:state.playerName, skill:state.playerSkillLevel, position:state.playerPosition} ]}
}

const incrementTeamSize = (state) => {
    return { ...state, teamSize: state.teamSize + 1 };
};

const decrementTeamSize = (state) => {
    return { ...state, teamSize: state.teamSize - 1 };
};

const submitTeam1 = (state, action) => ({...state, ...action})

const submitTeam2 = (state, action) => ({...state, ...action})

const resetTeams = (state) => (
    {...state, 
        teamName1: "",
        teamName2: "",
        kit1: 1,
        kit2: 2,
        colour1: "#ff8040",
        colour2: "#0000ff",
    }
)

const reducers = (state, action) => {
    switch (action.type) {
        case "submit": return addToPlayers(submitPlayer(state, action));
        case "submitTeam1": return submitTeam1(state,action);
        case "submitTeam2": return submitTeam2(state,action);
        case "incrementTeamSize": return incrementTeamSize(state,action);
        case "decrementTeamSize": return decrementTeamSize(state,action);
        case "resetTeams": return resetTeams(state, action);
        default: return state;
    }
};

export default reducers;