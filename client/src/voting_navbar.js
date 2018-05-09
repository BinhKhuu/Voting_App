import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from "reactstrap";


export class Header extends React.Component {
	render(){
		return(
			<div className="container fixed-top" id="menubar">
				<div className="col">
					<Navbar color="faded" dark>
						<NavbarBrand href="/" className="mr-auto">Logo</NavbarBrand>
						<Nav className="menuFonts">
							<NavItem className="menuSearch">
								<NavLink 
									onClick={this.props.toggleSearchBar}
								> Search &nbsp;<span className="fa fa-caret-down"></span>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>username</NavLink>
							</NavItem>
							<Dropdown 
								isOpen={this.props.dropOpen} 
								toggle={this.props.toggleDropdown}
								nav
							>
		                	<DropdownToggle className="menuFonts" nav caret>Log In</DropdownToggle>
		                	<DropdownMenu right>
			                  <DropdownItem id="ddiTwitter">Twitter</DropdownItem>
			                  <DropdownItem onClick={this.props.toggleSignIn} id="ddiSignin">Sign In</DropdownItem>
			                  <DropdownItem onClick={this.props.toggleSignUp} id="ddiSignup">SignUP</DropdownItem>
		               	</DropdownMenu>
		              	</Dropdown>
						</Nav>
					</Navbar>
				</div>
				{/*aninmate and render searchbar*/}
				<CSSTransition 
					in={this.props.searchbar} 
					timeout={400}
					unmountOnExit
					classNames="slide"
					/*remove padding in the body to align content*/
					onExited= {() => {
						this.setState({
							searchbar: false,
						},()=>{
							if(window.innerWidth > 600){
						 		document.body.classList.remove("bodyPaddingLG");		
							}
							else {
								document.body.classList.remove("bodyPaddingSMSearch");
							}
						});
					}}
					>
				<Searchbar />
				</CSSTransition>
			</div>
		);
	}
}

export class HeaderCollapse extends React.Component {
	render(){
		return(
			<div className="container fixed-top" id="menubar">
				<div className="col">
					<Navbar color="faded" dark>
						<NavbarBrand href="/" className="mr-auto">Logo</NavbarBrand>
						<NavbarToggler onClick={this.props.toggle} className="mr-2" />
						<Collapse isOpen={this.props.collapseOpen} navbar>
							<Nav className="menuFonts" navbar>
								<NavItem className="menuSearch">
									<NavLink onClick={this.props.toggleSearchBar}>Search &nbsp;<span className="fa fa-caret-down"></span></NavLink>
								</NavItem>
								<NavItem>
									<NavLink>username</NavLink>
								</NavItem>
								<Dropdown 
									isOpen={this.props.dropOpen} 
									toggle={this.props.toggleDropdown}
									nav
								>
			                	<DropdownToggle className="menuFonts" nav caret>Log In</DropdownToggle>
			                	<DropdownMenu right>
				                  <DropdownItem id="ddiTwitter">Twitter</DropdownItem>
				                  <DropdownItem onClick={this.props.toggleSignIn} id="ddiSignin">Sign In</DropdownItem>
				                  <DropdownItem onClick={this.props.toggleSignUp} id="ddiSignup">SignUP</DropdownItem>
			               	</DropdownMenu>
			              	</Dropdown>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
				{/*aninmate and render searchbar*/}
				<CSSTransition 
					in={this.props.searchbar} 
					timeout={400}
					unmountOnExit
					classNames="slide"
					/*remove padding in the body to align content*/
					onExited= {() => {
						this.setState({
							searchbar: false,
						},()=>{
							if(window.innerWidth > 600){
						 		document.body.classList.remove("bodyPaddingLG");		
							}
							else {
								document.body.classList.remove("bodyPaddingSMSearch");
							}
						});
					}}
					>
				<Searchbar />
				</CSSTransition>
			</div>
		)
	}
}

export class Searchbar extends React.Component {
	render() {
		return(
			<div className="row" id="searchbar">
				<div className="col">
					<Navbar>
						<Nav className="ml-auto">
							<NavItem>		
					        	<InputGroup>
					        		<Input type="text" size="40" placeholder="search..."/>
					          	<InputGroupAddon addonType="append"><Button type="submit">Search</Button></InputGroupAddon> 
					        	</InputGroup>
							</NavItem>
						</Nav>
					</Navbar>
				</div>
			</div>
		)
	}
}

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