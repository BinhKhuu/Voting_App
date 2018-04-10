import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/
import './index.css';
import { ButtonDropdown,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Form, FormGroup} from "reactstrap";
import {Modal, ModalHeader, ModalBody, ModalFooter, Label, Col } from "reactstrap";
class Header extends React.Component {
	render(){
		return(
			<div className="container fixed-top" id="menubar">
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
		                  <DropdownItem id="ddiSignup">SignUP</DropdownItem>
	               	</DropdownMenu>
	              	</Dropdown>
					</Nav>
				</Navbar>
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

class HeaderCollapse extends React.Component {
	render(){
		return(
			<div className="container fixed-top" id="menubar">
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
			                  <DropdownItem id="ddiSignup">SignUP</DropdownItem>
		               	</DropdownMenu>
		              	</Dropdown>
						</Nav>
					</Collapse>
				</Navbar>
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

class Searchbar extends React.Component {
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

class SignInModal extends React.Component {
	render(){
		return (
			<div>
				<Modal isOpen={this.props.isOpen} toggle={this.props.toggleSignIn}>
					<ModalHeader toggle={this.props.toggleSignIn}>Sign In</ModalHeader>
					<ModalBody>
						<Form action="#soon">
							<FormGroup>
									<InputGroup>
									<InputGroupAddon addonType="prepend">
										Email
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									</InputGroupAddon>
						        		<Input type="text" placeholder="Someone@email.com"/>	 
						        	</InputGroup>
							</FormGroup>
							<FormGroup>
									<InputGroup>
									<InputGroupAddon addonType="prepend">Password</InputGroupAddon>
						        		<Input type="text" placeholder="******"/>	 
						        	</InputGroup>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="success" type="submit">Sign In</Button>
						<Button color="secondary">Sign Up</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

class Footer extends React.Component {
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

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuDropdown: false,
			searchbar: false,
			collapseOpen: false,
			signInModal: false,
			username: "Guest",
			title: "Title",
			votes: 0,
			itemNum: 1,
		};
		this.toggleSearchBar = this.toggleSearchBar.bind(this);
		this.toggleSignIn = this.toggleSignIn.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
		this.collapseBtnPress = this.collapseBtnPress.bind(this);
		this.toggleDropdown = this.toggleDropdown.bind(this);
	}
	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}
	updateDimensions() {
		if(window.innerWidth > 600) {
			this.setState({
				searchbar: false,
				collapseOpen: false,
			},()=>{
				document.body.className = "";
			});
		}
		if(window.innerWidth < 600) {
			this.setState({
				searchbar: false,
				collapseOpen: false,
			},()=>{
				document.body.className = "";
			});
		}

	}
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
	collapseBtnPress(){
		if(this.state.collapseOpen) {
			document.body.className = "";
			this.setState({
				collapseOpen: !this.state.collapseOpen,
				searchbar: false,
			});
		}
		else {
			this.setState({
				collapseOpen: !this.state.collapseOpen,
			},function() {
				if(!this.state.collapseOpen)document.body.className = "";
				else document.body.className = "bodyPaddingSM";
			});
		}
	}
	toggleDropdown(){
		this.setState({
			menuDropdown: !this.state.menuDropdown,
		});
	}
	toggleSignIn(){
		this.setState({
			signInModal: !this.state.signInModal,
		});
	}
	render() {
		return (
			<div class='container'>
				{	window.innerWidth > 600 && <Header 
															toggleSignIn={this.toggleSignIn}
															dropOpen={this.state.menuDropdown}
															toggleDropdown={this.toggleDropdown}

															collapseOpen={this.state.collapseOpen} 
															toggleSearchBar={this.toggleSearchBar} 
															searchbar={this.state.searchbar} 
														/> 
				}
				{	window.innerWidth < 600 && <HeaderCollapse 
															toggleSignIn={this.toggleSignIn}
															dropOpen={this.state.menuDropdown}
															toggleDropdown={this.toggleDropdown}
															toggle={this.collapseBtnPress} 
															collapseOpen={this.state.collapseOpen} 
															toggleSearchBar={this.toggleSearchBar} 
															searchbar={this.state.searchbar} 
														/>
				}
				<div id="listContainer">
					<ListItem 
						itemNum={this.state.itemNum} 
						title={this.state.title} 
						votes={this.state.votes} 
					/>
					<ListItem 
						itemNum={this.state.itemNum} 
						title={this.state.title} 
						votes={this.state.votes} 
					/>
				</div>
				<SignInModal 
					isOpen={this.state.signInModal}
					toggleSignIn={this.toggleSignIn}
				/>
				<Footer />			
			</div>
		);
	}
}

ReactDOM.render(
  <MainPage />,
    document.getElementById('root')
);