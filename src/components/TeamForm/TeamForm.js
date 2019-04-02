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
            kit: 0,
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
        // this.props.submitTeam(this.state);
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
                    className="name-input"
                />
                <Banner
                    text="Select a kit"
                />

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

                <Banner
                    text="Select A Colour"
                />

                <input
                    onChange={this.handleChangeColour}
                    type="color"
                    className="colour-display"
                />

                <ButtonOnClick
                    color="#eaff04"
                    text="Confirm Details"
                />   

            </form>
        );
    }
}

export default TeamForm;