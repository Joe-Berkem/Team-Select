import { connect } from 'react-redux';
import TeamForm from './TeamForm.js';
import { submitTeam2 } from '../../data/actions';

const mapStateToProps = (state) => {
  return {
    teamName1: state.teamName1,
    teamName2: state.teamName2,
    colour: state.colour2,
    kit: state.kit2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitTeam: (data) => dispatch(submitTeam2(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);