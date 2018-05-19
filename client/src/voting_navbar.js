import React from 'react';
import './index.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from "reactstrap";
import {HeaderCollapse, Header} from './navbar_elements.js';

export class Menubar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchbar: false,
			collapseOpen: false,
			loginMenuOpen: false,
		}
		this.toggleSearchBar = this.toggleSearchBar.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
		this.toggleLoginMenuOpen = this.toggleLoginMenuOpen.bind(this);
		this.collapseBtnPress = this.collapseBtnPress.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	/* Toggler for search bar
	 * updates searchbar state between false and true
	 */
	toggleSearchBar(){
		this.setState({
			searchbar: !this.state.searchbar,
		},function() {
			/*add pading to body to align content*/	
			if(this.state.searchbar && window.innerWidth > 600) document.body.classList.add("bodyPaddingLG");
			if(this.state.searchbar && window.innerWidth < 600) document.body.classList.add("bodyPaddingSMSearch");
			//searchbar not showing is handled in CSSTranslation onExit() in navBar
		});
	}

	/* changes navigation bar when window is resized	
	 *	600 > is full menu
	 *  600 =< is mobile collapsed view
	 */
	updateDimensions() {
		//full view
		if(window.innerWidth > 600) {
			this.setState({
				searchbar: false,
				collapseOpen: false,
				loginMenuOpen: false,
			},()=>{
				document.body.className = "";
			});
		}
		//collapsed view
		if(window.innerWidth < 600) {
			this.setState({
				searchbar: false,
				collapseOpen: false,
			},()=>{
				document.body.className = "";
			});
		}

	}
	/* Log In menu toggler 
	 * toggles the Log In option
	 * updates loginMenuOpen
	 */
	toggleLoginMenuOpen(){
		this.setState({
			loginMenuOpen: !this.state.loginMenuOpen,
		});
	}
	/*	collapse menu button handler
	 * toggles between open and close states
	 * updates collapseOpen varaible
	 */
	collapseBtnPress(){
		//open
		if(this.state.collapseOpen) {
			document.body.className = "";
			this.setState({
				collapseOpen: !this.state.collapseOpen,
				searchbar: false,
			});
		}
		//close
		else {
			this.setState({
				collapseOpen: !this.state.collapseOpen,
			},function() {
				if(!this.state.collapseOpen)document.body.className = "";
				else document.body.className = "bodyPaddingSM";
			});
		}
	}

	render() {
		return (
				<div>
					{ window.innerWidth > 600 &&						
						<Header 
							username={this.props.username}		
							//drop down options for login option
							//twitter, login, sign up												
							loginMenuOpen={this.state.loginMenuOpen}
							toggleLoginMenuOpen={this.toggleLoginMenuOpen}
							toggleSignIn={this.props.toggleSignIn}
							toggleSignUp={this.props.toggleSignUp}
							//searchbar toggler
							searchbar={this.state.searchbar} 
							toggleSearchBar={this.toggleSearchBar}
						/> 
					}
					
					{
						window.innerWidth < 600 && 
						<HeaderCollapse 
							username={this.props.username}
							//drop down menu for log In options
							//twitter, login, sign up														
							toggleLoginMenuOpen={this.toggleLoginMenuOpen}
							
							toggleSignIn={this.props.toggleSignIn}
							toggleSignUp={this.props.toggleSignUp}
							//searchbar toggler
							searchbar={this.state.searchbar} 
							toggleSearchBar={this.toggleSearchBar} 
							loginMenuOpen={this.state.loginMenuOpen}
							//collapse btn toggler 	
							collapseOpen={this.state.collapseOpen} 
							collapseBtnPress={this.collapseBtnPress}

						/>
					}
				</div>
		);
	}
}