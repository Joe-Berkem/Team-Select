import { connect } from 'react-redux';
import PlayerInputPage from './PlayerInputPage';


const mapStateToProps = state => {
  return {
       players: state.players,
       teamSize: state.teamSize,
  };
};


export default connect(mapStateToProps)(PlayerInputPage);