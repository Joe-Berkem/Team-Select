import { connect } from 'react-redux';
import PlayerForm from './PlayerForm.js';
import { submitPlayer } from '../../data/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    submitPlayer: (data) => dispatch(submitPlayer(data)),
  };
};

export default connect(null, mapDispatchToProps)(PlayerForm);
