import React from 'react';
import ReactDOM from 'react-dom';
/*bootstrap.css interferes with index.css*/
import './index.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';

class NavBar extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col"id="menubar">
					<nav className="navbar navbar-expand-sm navbar-dark justify-content-between">
							{/*Logo on left side*/}
				  		<a className="navbar-brand" href="javascript:;">Logo</a>
				  		{/*toggle button on colapse */}
				  		<div className="navbar-nav">
					  		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> 
					  			<span class="navbar-toggler-icon"></span>
					  		</button>
							<div className="collapse navbar-collapse" id="collapsibleNavbar">
								{/*options on right side */}
								<ul className="navbar-nav">
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
							    	<div className="dropdown-menu">
							        	<a className="dropdown-item" href="#">Link 1</a>
							        	<a className="dropdown-item" href="#">Link 2</a>
							        	<a className="dropdown-item" href="#">Link 3</a>
							      </div>
									</li>
								</ul>
							</div>
						</div>
					</nav> 
				</div>
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
								<form class="form-inline menuFonts" action="#">
									<input class="form-control mr-sm-2" size="40" type="text" placeholder="Search" aria-label="Search"></input>
									<button class="btn btn-outline-success" type="submit">Search</button>
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
			<div className='row footer menuFonts'>
				{/*Author */}
				<div className='col-6'>
					<p id="author">Binh Khuu</p>
				</div>	
				{/*icons on the right */}			
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
		this.state = {
			searchbar: false,
			username: "Guest",
			title: "Title",
			votes: 0,
			itemNum: 1,
		};
		this.toggleSearchBar = this.toggleSearchBar.bind(this);
	}
	toggleSearchBar(){
		this.setState({
			searchbar: !this.state.searchbar,
		})
	}
	render() {
		return (
			<div class='container'>
				<NavBar toggle={this.toggleSearchBar}/>
				<CSSTransition 
					in={this.state.searchbar} 
					timeout={100}
					unmountOnExit
					classNames="slide"
					onExited= {() => {
						this.setState({
							searchbar: false,
						});
					}}
				>
					<SearchBar />
				</CSSTransition>
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