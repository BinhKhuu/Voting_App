import React from 'react';
import {Navbar, NavbarBrand, Nav, NavLink} from "reactstrap";

export class Footer extends React.Component {
	render() {
		return (
			<div className="row footer">
				<div className="col">
					<Navbar>
						<NavbarBrand className="mr-auto" id="author">Binh Khuu</NavbarBrand>	
						<Nav id="icons">
							<NavLink href="https://github.com/BinhKhuu/Voting_App" target="_blank"><i id="github" className="fa fa-github"></i></NavLink>
							<NavLink href="https://codepen.io/spoonable/#" target="_blank" ><i id="codepen" className="fa fa-codepen"></i></NavLink>
						</Nav>
					</Navbar>
				</div>
			</div>
		)
	}
}