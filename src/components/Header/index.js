import { connect } from "react-redux";
import Header from "./Header";
import { resetAll } from "../../data/actions";

const mapDispatchToProps = dispatch => {
    return {
        resetAll: () => dispatch(resetAll())
    };
};

export default connect(null, mapDispatchToProps)(Header);