import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';

class PlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: "",
            playerSkillLevel: 0,
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeSkill = this.handleChangeSkill.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({ playerName: e.currentTarget.value});
    }

    handleChangeSkill(e) {
        this.setState({ playerSkillLevel: e.currentTarget.value});
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

                <input
                    onChange={this.handleChangeSkill}
                    type="range"
                    min="0" max="3" 
                    className="name-input"
                    step="1"
                />                
            </form>
        );
    }
}

export default PlayerForm;