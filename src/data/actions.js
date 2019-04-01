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