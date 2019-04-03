import { connect } from 'react-redux';
import FinalTeamsPage from './FinalTeamsPage';


const mapStateToProps = state => {
  return {
       players: state.players,
       teamSize: state.teamSize,
       teamName1: state.teamName1,
       teamName2: state.teamName2,
       colour1: state.colour1,
       colour2: state.colour2,
       kit1: state.kit1,
       kit2: state.kit2,
  };
};


export default connect(mapStateToProps)(FinalTeamsPage);