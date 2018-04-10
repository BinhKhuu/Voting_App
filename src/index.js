import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/
import './index.css';
import {SignInModal, SignUpModal} from "./voting_modal.js";
import {Header, HeaderCollapse, Footer} from "./voting_navbar.js";

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

class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuDropdown: false,
			searchbar: false,
			collapseOpen: false,
			signInModal: false,
			signUpModal: false,
			username: "Guest",
			title: "Title",
			votes: 0,
			itemNum: 1,
		};
		this.toggleSearchBar = this.toggleSearchBar.bind(this);
		this.toggleSignIn = this.toggleSignIn.bind(this);
		this.toggleSignUp = this.toggleSignUp.bind(this);
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
			signUpModal: false,
		});
	}
	toggleSignUp(){
		this.setState({
			signUpModal: !this.state.signUpModal,
			signInModal: false,
		});
	}
	render() {
		return (
			<div className='container'>
				{	window.innerWidth > 600 && <Header 														
															dropOpen={this.state.menuDropdown}
															toggleDropdown={this.toggleDropdown}
															collapseOpen={this.state.collapseOpen} 
															toggleSearchBar={this.toggleSearchBar} 
															toggleSignIn={this.toggleSignIn}
															toggleSignUp={this.toggleSignUp}
															searchbar={this.state.searchbar} 
														/> 
				}
				{	window.innerWidth < 600 && <HeaderCollapse 
															toggleSignIn={this.toggleSignIn}
															toggleSignUp={this.toggleSignUp}
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
					toggleSignUp={this.toggleSignUp}
				/>
				<SignUpModal 
					isOpen={this.state.signUpModal}
					toggleSignUp={this.toggleSignUp}
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