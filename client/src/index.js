import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/
import './index.css';
import {Modals} from "./voting_modal.js";
import {Menubar, Header} from "./voting_navbar.js";
import {ListItem} from "./list_item.js";
import {Footer} from "./footer.js";


class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: {email: '', password: ''},
			menuDropdown: false,
			collapseOpen: false,
			signInModal: false,
			signUpModal: false,
			username: "Guest",
			title: "Title",
			votes: 0,
			itemNum: 1,
		};
		this.toggleSignIn = this.toggleSignIn.bind(this);
		this.toggleSignUp = this.toggleSignUp.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}




	/*
	 * update changes when username is updated 
	 */
	handleUserChange(e) {
		this.setState({username: e.target.value})
	}
	/*	
	 * handle changes when password is updated
	 */
	handlePasswordChange(e) {
		this.setState({password: e.target.value})
	}

	handleSubmit() {
	    fetch('/users/login', {
	      method: 'POST',
	      body: JSON.stringify({
	        user_name: this.state.username,
	        password: this.state.password,
	      }),
	      headers: {"Content-Type": "application/json"}
	    })
	    .then(this.setState({signInModal: false}))
	}



	/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	Possible refactor putting sign in and up toggles into one function */
	toggleSignIn(){
		this.setState({
			signInModal: !this.state.signInModal,
			signUpModal: false,
		});

		fetch('/users/login')
			.then(res => res.json())
			.then(login => {
				this.setState({login});
		})
	}

	toggleSignUp(){
		this.setState({
			signUpModal: !this.state.signUpModal,
			signInModal: false,
		});

		//testing
		fetch('/users/login')
			.then(res => res.json())
			.then(login => this.setState({login}))
	}
	/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
	render() {
		const numItems = 10;
		return (
			//number of list items
			
			<div className='container'>

				{<Menubar
					toggleSignIn={this.toggleSignIn}
					toggleSignUp={this.toggleSignUp}
					toggleDropdown={this.toggleDropdown}
				/>}

				<div id="listContainer">
				{Array(numItems).fill(null).map(x => {
					return <ListItem 
						itemNum={this.state.itemNum} 
						title={this.state.title} 
						votes={this.state.votes} 
					/> 	
				})}
				</div>

				<Modals 
					email={this.state.login.email}
					password={this.state.login.password}
					handleUserChange={this.handleUserChange}
					handlePasswordChange={this.handlePasswordChange}				
					isOpenSignIn={this.state.signInModal}
					isOpenSignUp={this.state.signUpModal}
					toggleSignIn={this.toggleSignIn}
					toggleSignUp={this.toggleSignUp}
					handleSubmit={this.handleSubmit}
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