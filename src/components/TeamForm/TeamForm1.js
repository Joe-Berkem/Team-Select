import { connect } from 'react-redux';
import TeamForm from './TeamForm.js';
import { submitTeam1 } from '../../data/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    submitTeam: (data) => dispatch(submitTeam1(data)),
  };
};

export default connect(null, mapDispatchToProps)(TeamForm);
