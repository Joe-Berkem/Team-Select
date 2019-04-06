import { connect } from 'react-redux';
import PlayerInputPage from './PlayerInputPage';
import { resetPlayers } from '../../data/actions';

const mapStateToProps = state => {
  return {
       players: state.players,
       teamSize: state.teamSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetPlayers: (data) => dispatch(resetPlayers(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInputPage);