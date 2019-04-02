import { connect } from 'react-redux';
import TeamForm from './TeamForm.js';
import { submitTeam2 } from '../../data/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    submitTeam: (data) => dispatch(submitTeam2(data)),
  };
};

export default connect(null, mapDispatchToProps)(TeamForm);