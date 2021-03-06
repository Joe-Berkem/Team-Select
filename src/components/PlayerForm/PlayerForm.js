import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import AlertBanner from '../../components/AlertBanner/AlertBanner';
import NoStar from '../../components/Stars/NoStar';
import Star1 from '../../components/Stars/Star1';
import Star2 from '../../components/Stars/Star2';
import Star3 from '../../components/Stars/Star3';
import ButtonOnClick from '../ButtonOnClick/ButtonOnClick';
import Position from '../Position/Position';

class PlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: "",
            playerSkillLevel: 0,
            playerPosition: 0,
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSkill = this.handleChangeSkill.bind(this);
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({ playerName: e.currentTarget.value});
    }

    handleChangeSkill(e) {
        this.setState({ playerSkillLevel: e.currentTarget.value});
    }

    handleChangePosition(e) {
        this.setState({ playerPosition: e.currentTarget.value});
    }

    onKeyPress(event) {
        if (event.which === 13) {
          event.preventDefault();
        }
    }
   
    handleSubmit(e) {
        e.preventDefault();
        this.props.submitPlayer(this.state);
        this.setState({ playerName: "", playerSkillLevel: 0, playerPosition: 0,});
    }

    render() {
        let {players, teamSize} = this.props;

        return (
            <form 
                onSubmit={this.handleSubmit}
                className="player-form-container"
                onKeyPress={this.onKeyPress}
            >
                <input
                    onChange={this.handleChangeName}
                    type="text"
                    maxLength={10}
                    className="name-input"
                    value={this.state.playerName}
                    required
                />

                <Banner
                    text="Skill Level"
                />

                <div className="star-wrapper">
                    <NoStar/>
                    <Star1/>
                    <Star2/>
                    <Star3/>
                </div>

                <input
                    onChange={this.handleChangeSkill}
                    type="range"
                    min="0" max="3" 
                    className="skill-input"
                    step="1"
                    value={this.state.playerSkillLevel}
                />   

                <Banner
                    text="Preferred Position"
                />

                <div className="positions-wrapper">
                    <Position
                        text="GK"
                        color="#eaff04"
                    />
                    <Position
                        text="DEF"
                        color="#E90052"
                    />
                    <Position
                        text="MID"
                        color="#04F5FF"
                    />
                    <Position
                        text="FWD"
                        color="#38003C"
                    />
                </div>

                <input
                    onChange={this.handleChangePosition}
                    type="range"
                    min="0" max="3" 
                    className="position-input"
                    step="1"
                    value={this.state.playerPosition}
                />   
                {players.length < teamSize * 2 ?
                <ButtonOnClick
                    color="#eaff04"
                    text="Add Player"
                />
                :
                <AlertBanner
                    text="Reset player list or increase team size"
                />
                }
            </form>
        );
    }
}

export default PlayerForm;