export const submitPlayer = ({
    playerName, 
    playerSkillLevel, 
    playerPosition 
}) => {
    return {
        type: "submit",
        playerName: playerName,
        playerSkillLevel: playerSkillLevel,
        playerPosition: playerPosition,
    };
};

export const submitTeam1 = ({
    teamName, 
    kit, 
    colour 
}) => {
    return {
        type: "submitTeam1",
        teamName1: teamName,
        kit1: kit,
        colour1: colour,
    };
};

export const submitTeam2 = ({
    teamName, 
    kit, 
    colour 
}) => {
    return {
        type: "submitTeam2",
        teamName2: teamName,
        kit2: kit,
        colour2: colour,
    };
};

export const handleTeamIncrement = () => {
    return {
        type: "incrementTeamSize",
    };
};
   
export const handleTeamDecrement = () => {
    return {
        type: "decrementTeamSize",
    };
};

export const resetPlayers = () => {
    return {
      type: "resetPlayers",
    };
};

export const resetTeams = () => {
    return {
      type: "resetTeams",
    };
};

export const sortPlayersSkills = () => {
    return {
      type: "sortPlayersSkills",
    };
};

export const resetAll = () => {
    return {
      type: "resetAll",
    };
};

