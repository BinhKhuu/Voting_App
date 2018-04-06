import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/
import './index.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class Menubar extends React.Component {
	render() {
		return (
			<div class ="row menuFonts" id="header">
				<div className="col-6 menuTitle">
					Title
				</div>
				<div className="col-2" id="username">
					{this.props.username}
				</div>
				<div className="col-4">
					<ButtonDropdown direction='bottom' isOpen={this.props.isOpen} toggle={this.props.toggle}>
						<DropdownToggle caret id="signin">login</DropdownToggle>
						<DropdownMenu right id="dropdownMenu">
							<DropdownItem id="ddiTwitter">Twitter</DropdownItem>
							<DropdownItem id="ddiSignin">Sign In</DropdownItem>
							<DropdownItem id="ddiSignup">Sign Up</DropdownItem>
						</DropdownMenu>
					</ButtonDropdown>
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
				<div className="col-10" id="itemTitle"><span>{this.props.title}</span></div>
				<div className="col-1" id="voteCount">{this.props.votes}</div>
			</div>			
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<div className='row footer menuFonts'>
				<div className='col-6'>
					<p id="author">Binh Khuu</p>
				</div>
				<div id="icons" className="col-6">
					<a href="https://github.com/BinhKhuu/Voting_App" target="_blank"><i id="github" className="fa fa-github" ></i></a>
					<a href="https://codepen.io/spoonable/#" target="_blank"><i id="codepen" className="fa fa-codepen"></i></a>
				</div>	
			</div>			
		)
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
			<div class='container' id="container">
				{/*menubar*/}
				<Menubar username={this.state.username} toggle={this.toggleDropMenu} isOpen={this.state.dropMenuOpen} />
				{/*end menubar*/}
				<div id="listContainer">
					<ListItem itemNum={this.state.itemNum} title={this.state.title} votes={this.state.votes} />
				</div>
				<Footer />				
			</div>
		);
	}
}

ReactDOM.render(
  <MainPage />,
    document.getElementById('root')
);