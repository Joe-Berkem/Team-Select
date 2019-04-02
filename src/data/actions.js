export const submitPlayer = ({
    playerName, 
    playerSkillLevel, 
    playerPosition 
}) => {
    console.log(playerName)
    return {
        type: "submit",
        playerName: playerName,
        playerSkillLevel: playerSkillLevel,
        playerPosition: playerPosition,
    };
};