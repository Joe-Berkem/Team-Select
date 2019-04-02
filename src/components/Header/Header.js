import React from 'react';
import logo from '../../assets/logo.svg'

const Header = () => (

	<>
		<div className="header">
			<img className="logo" src={logo} alt="Team Select Logo"/>
			<h1 className="header-text">Team Select</h1>
		</div>
	</>
 
);

export default Header;