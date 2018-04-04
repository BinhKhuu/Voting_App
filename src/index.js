import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/

import './index.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MainPage extends React.Component {
	constructor(props) {
		super(props);

		this.toggleDropMenu = this.toggleDropMenu.bind(this);
		this.state = {
			dropMenuOpen: false,
			username: "Guest",
		};
	}
	toggleDropMenu() {
		this.setState({ 
			dropMenuOpen: !this.state.dropMenuOpen,
		});
	}
	render() {
		return (
			<div class='container'>
				{/*menubar*/}
				<div class ="row header">
					<div className="col-8 menuTitle">
						Title
					</div>
					<div className="col-2" id="username">
						{this.state.username}
					</div>
					<div className="col-2">
						<Dropdown direction='bottom' isOpen={this.state.dropMenuOpen} toggle={this.toggleDropMenu}>
							<DropdownToggle caret id="signin"> login </DropdownToggle>
							<DropdownMenu right className="dropdownMenu">
								<DropdownItem>Twitter</DropdownItem>
								<DropdownItem>Sign In</DropdownItem>
								<DropdownItem>Sign Up</DropdownItem>
							</DropdownMenu>
						</Dropdown>

					</div>
				{/*end menubar*/}
				</div>
				<div className='row voteList'>
					<div className='col'>
					{/* add body here*/}
					</div>

				</div>
				<div className='row footer'>
					<div className='col'>
					{/* add footer here*/}
					</div>
				</div>				
			</div>
		);
	}
}

ReactDOM.render(
  <MainPage />,
    document.getElementById('root')
);