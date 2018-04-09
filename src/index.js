import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/
import './index.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";

class NavBar extends React.Component {
	render() {
		return (
			<div className="container fixed-top" id="menubar">
				<nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
						{/*Logo on left side*/}
			  		<a className="navbar-brand" href="javascript:;">Logo</a>
			  		{/*toggle button on colapse */}
				  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={this.props.collapseBtn}> 
				  			<span class="navbar-toggler-icon"></span>
				  	</button>
						<div className="collapse navbar-collapse" id="collapsibleNavbar">
							{/*options on right side */}
							<ul className="navbar-nav navbar-right ml-auto">
								{/*search */}
								<li className="nav-item">
									<a className="nav-link" onClick={this.props.toggle}>
										Search &nbsp;
										<span className="fa fa-caret-down"></span>
									</a>
								</li>
								{/*username */}
								<li className="nav-item">
							    	<a className="nav-link" href="#">username</a>
							  </li>
								{/*login dropdown */}
							  <li className="nav-item dropdown">
						     	<a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
						        Login
						      	</a>
						    	<div className="dropdown-menu dropdown-menu-right">
						        	<a className="dropdown-item" href="#" id="ddiTwitter">Twitter</a>
						        	<a className="dropdown-item" href="#" id="ddiSignin">Sign in</a>
						        	<a className="dropdown-item" href="#" id="ddiSignup">Sign up</a>
						      </div>
								</li>
							</ul>
						</div>
						{/*serchbar toggling*/}
				</nav> 
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
				<SearchBar />
				</CSSTransition>
			</div>
		)
	}
}

class Header extends React.Component {
	render(){
		return(
			<div className="container fixed-top" id="menubar">
				<Navbar color="faded" light>
					<NavbarBrand href="/" className="mr-auto">Logo</NavbarBrand>
						<Nav>
							<NavItem>
								<NavLink onClick={this.props.toggleSearchBar}>Search</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>username</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Log in</NavLink>
							</NavItem>
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
				<SearchBar />
				</CSSTransition>
			</div>
		);
	}
}

class HeaderCollapse extends React.Component {
	render(){
		return(
			<div className="container fixed-top" id="menubar">
				<Navbar color="faded" light>
					<NavbarBrand href="/" className="mr-auto">Logo</NavbarBrand>
					<NavbarToggler onClick={this.props.toggle} className="mr-2" />
					<Collapse isOpen={this.props.collapseOpen} navbar >
						<Nav navbar>
							<NavItem>
								<NavLink onClick={this.props.toggleSearchBar}>Search</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>username</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>Log in</NavLink>
							</NavItem>
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
				<SearchBar />
				</CSSTransition>
			</div>
		)
	}
}

class SearchBar extends React.Component {
	render(){
		return(
			<div className="row" id="searchbar">
				<div className="col">
					<nav className="navbar navbar-dark navbar-center navbar-expand-sm">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<form className="input-group" action="#"> 
										<input type="text" className="form-control mr-sm-2" size="40" placeholder="Search for..." aria-label="Search"></input>
										<span className="input-group-btn">
											<button class="btn btn-secondary" type="submit">Search</button>
										</span>
								</form>
							</li>
						</ul>
					</nav>
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

class Footer extends React.Component {
	render() {
		return (
			<div className='row footer'>
				{/*Author */}
				<div className="col">
					<nav className="navbar navbar-dark navbar-expand-sm">
						<a className="navbar-brand" href="javascript:;" id="author">Binh Khuu</a>
						<ul className="navbar-nav ml-auto" id="icons">
							<li className="nav-item">
								<a href="https://github.com/BinhKhuu/Voting_App" target="_blank"><i id="github" className="fa fa-github" ></i></a>
							</li>
							<li className="nav-item">
								<a href="https://codepen.io/spoonable/#" target="_blank"><i id="codepen" className="fa fa-codepen"></i></a>
							</li>
						</ul>
					</nav>
				</div>
			</div>			
		)
	}
}

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchbar: false,
			collapseOpen: false,
			username: "Guest",
			title: "Title",
			votes: 0,
			itemNum: 1,
		};
		this.toggleSearchBar = this.toggleSearchBar.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
		this.collapseBtnPress = this.collapseBtnPress.bind(this);
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


		/*
		this.setState({
			collapseOpen: !this.state.collapseOpen,
		},function() {
			if(!this.state.collapseOpen){
				if(!this.state.searchbar) document.body.className = "";
				else {
					document.body.className = "";
					this.setState({
						searchbar: false,
					});
				}
			} 
			if(this.state.collapseOpen) document.body.className = "bodyPaddingSM";
		});*/
		
	}
	render() {
		return (
			<div class='container'>
				{/*<NavBar toggle={this.toggleSearchBar} searchbar={this.state.searchbar} collapseOpen={this.state.collapseOpen} collapseBtn={this.collapseBtnPress}/>*/}
				{window.innerWidth > 600 && <Header toggle={this.collapseBtnPress} collapseOpen={this.state.collapseOpen} toggleSearchBar={this.toggleSearchBar} searchbar={this.state.searchbar} /> }
				{window.innerWidth < 600 && <HeaderCollapse toggle={this.collapseBtnPress} collapseOpen={this.state.collapseOpen} toggleSearchBar={this.toggleSearchBar} searchbar={this.state.searchbar} />}
				<div id="listContainer">
					<ListItem itemNum={this.state.itemNum} title={this.state.title} votes={this.state.votes} />
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