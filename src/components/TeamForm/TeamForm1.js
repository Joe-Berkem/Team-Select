import { connect } from 'react-redux';
import TeamForm from './TeamForm.js';
import { submitTeam1 } from '../../data/actions';


const mapStateToProps = (state) => {
  return {
    teamName1: state.teamName1,
    teamName2: state.teamName2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitTeam: (data) => dispatch(submitTeam1(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
