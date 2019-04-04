import { connect } from 'react-redux';
import TeamCustomisationPage from './TeamCustomisationPage.js';
import { resetTeams, sortPlayersSkills } from '../../data/actions';


const mapStateToProps = (state) => {
  return {
    teamName1: state.teamName1,
    teamName2: state.teamName2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetTeams: (data) => dispatch(resetTeams(data)),
    sortPlayersSkills: (data) => dispatch(sortPlayersSkills(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamCustomisationPage);