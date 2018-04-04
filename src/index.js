import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/

import './index.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Menubar extends React.Component {
	render() {
		return (
			<div class ="row menuFonts" id="header">
				<div className="col-8 menuTitle">
					Title
				</div>
				<div className="col-2" id="username">
					{this.props.username}
				</div>
				<div className="col-2">
					<Dropdown direction='bottom' isOpen={this.props.isOpen} toggle={this.props.toggle}>
						<DropdownToggle caret id="signin"> login </DropdownToggle>
						<DropdownMenu right id="dropdownMenu">
							<DropdownItem id="ddiTwitter">Twitter</DropdownItem>
							<DropdownItem id="ddiSignin">Sign In</DropdownItem>
							<DropdownItem id="ddiSignup">Sign Up</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
		);
	}
}

class ListItem extends React.Component {
	render() {
		return (
			<div className='row item itemFonts'>
				<div className="col-1" id="itemNum">{this.props.itemNum}</div>
				<div className="col-10" id="listContainer"><span>{this.props.title}</span></div>
				<div className="col-1" id="voteCount">{this.props.votes}</div>
			</div>			
		);
	}
}

class MainPage extends React.Component {
	constructor(props) {
		super(props);

		this.toggleDropMenu = this.toggleDropMenu.bind(this);
		this.state = {
			dropMenuOpen: false,
			username: "Guest",
			title: "Title",
			votes: 0,
			itemNum: 1,
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
				<Menubar username={this.state.username} toggle={this.toggleDropMenu} isOpen={this.state.dropMenuOpen} />
				{/*end menubar*/}
				<ListItem itemNum={this.state.itemNum} title={this.state.title} votes={this.state.votes} />
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