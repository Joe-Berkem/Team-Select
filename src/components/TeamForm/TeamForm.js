import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import Kit1 from '../../assets/striped-kit.svg';
import Kit2 from '../../assets/full-kit.svg';
import Kit3 from '../../assets/half-kit.svg';
import ButtonOnClick from '../ButtonOnClick/ButtonOnClick';

class TeamForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName: "",
            kit: 1,
            colour: "",
        };

        this.handleChangeTeamName = this.handleChangeTeamName.bind(this);
        this.handleChangeKit = this.handleChangeKit.bind(this);
        this.handleChangeColour = this.handleChangeColour.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTeamName(e) {
        this.setState({ teamName: e.currentTarget.value});
    }

    handleChangeKit(e) {
        this.setState({ kit: e.currentTarget.value});
    }

    handleChangeColour(e) {
        this.setState({ colour: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitTeam(this.state);
    }

    render() {

        return (
            <form 
                onSubmit={this.handleSubmit}
                className="player-form-container"
            >
                <input
                    onChange={this.handleChangeTeamName}
                    type="text"
                    maxLength={15}
                    className="name-input"
                    required
                />

                <Banner text="Select a kit"/>

                <div className="star-wrapper">
                    <img className="kit-icon" src={Kit1} alt="list-icon"/>
                    <img className="kit-icon" src={Kit2} alt="list-icon"/>
                    <img className="kit-icon" src={Kit3} alt="list-icon"/>
                </div>

                <input
                    onChange={this.handleChangeKit}
                    type="range"
                    min="1" max="3" 
                    className="skill-input"
                    step="1"
                />   

                <Banner text="Select A Colour"/>

                <input
                    onChange={this.handleChangeColour}
                    type="color"
                    className="colour-display"
                />
                {!this.props.teamName1 || !this.props.teamName2 ?
                <ButtonOnClick
                    color="#e90052"
                    text="Confirm Details"
                />  
                : null
                }

            </form>
        );
    }
}

export default TeamForm;