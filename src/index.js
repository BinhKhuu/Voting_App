import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class MainPage extends React.Component {
	constructor(props) {
		super(props);

		this.toggleDropMenu = this.toggleDropMenu.bind(this);
		this.state = {
			dropMenuOpen: false,
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
				<div class ="row header">
					{/*add menubar here*/}
					<div className="col-10 menuTitle">
					Title
					</div>
					<div className='col'>
						<Dropdown direction="left"  className='menuLogin' isOpen={this.state.dropMenuOpen} toggle={this.toggleDropMenu}>
							<DropdownToggle color="primary" caret>
							Log in
							</DropdownToggle>
							<DropdownMenu right className='dropMenuOptions'>
								<DropdownItem className="TwitOpt">Twitter</DropdownItem>
								<DropdownItem divider />
								<DropdownItem className="accOpt">Account</DropdownItem>
								<DropdownItem divider />
								<DropdownItem className="signOpt">Sign up</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</div>
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