import { connect } from "react-redux";
import PlayerList from "./PlayerList.js";

const mapStateToProps = state => {
    return {
         list: state.players,
    };
};

export default connect(mapStateToProps)(PlayerList);