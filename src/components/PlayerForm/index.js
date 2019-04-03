import { connect } from 'react-redux';
import PlayerForm from './PlayerForm.js';
import { submitPlayer } from '../../data/actions';


const mapStateToProps = state => {
  return {
       players: state.players,
       teamSize: state.teamSize,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    submitPlayer: (data) => dispatch(submitPlayer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);
