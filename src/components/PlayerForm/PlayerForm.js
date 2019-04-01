import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
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

    handleSubmit(e) {
        e.preventDefault();
        // this.props.submitMed(this.state);
    }

    render() {

        return (
            <form 
                onSubmit={this.handleSubmit}
                className="player-form-container"
            >
                <input
                    onChange={this.handleChangeName}
                    type="text"
                    className="name-input"
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
                />   

                <ButtonOnClick
                    onClick={this.onClick}
                    color="#eaff04"
                    text="Add Player"
                />

            </form>
        );
    }
}

export default PlayerForm;