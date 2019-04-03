import { connect } from 'react-redux';
import FinalTeamsPage from './FinalTeamsPage';


const mapStateToProps = state => {
  return {
       players: state.players,
       teamSize: state.teamSize,
  };
};


export default connect(mapStateToProps)(FinalTeamsPage);