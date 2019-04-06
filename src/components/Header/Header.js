import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";

const Header = ( { resetAll } ) => (
	<>
		<div className="header">
			<img className="logo" src={logo} alt="Team Select Logo"/>
			<h1 className="header-text">Team Select</h1>
		</div>
		<Link to="/">
			<button
				onClick={resetAll}
				className="reset-button-header"
			>Return to start
			</button>
		</Link>
	</>
);

export default Header;