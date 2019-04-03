import { connect } from "react-redux";
import TeamSize from "./TeamSize";
import { handleTeamIncrement, handleTeamDecrement } from "../../data/actions";


const mapStateToProps = state => {
    return {
        teamSize: state.teamSize,
       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement: () => dispatch(handleTeamIncrement()),
        handleDecrement: () => dispatch(handleTeamDecrement()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSize);