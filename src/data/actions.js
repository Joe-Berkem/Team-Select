export const submitPlayer = ({playerName, playerSkillLevel, playerPosition }) => {
    return {
        type: "submit",
        playerName,
        playerSkillLevel,
        playerPosition,
    };
};