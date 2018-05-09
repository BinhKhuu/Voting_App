import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import {Button, Form, FormGroup} from "reactstrap";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

export class SignInModal extends React.Component {
	render(){
		return (
			<div>
				<Modal isOpen={this.props.isOpen} toggle={this.props.toggleSignIn}>
					<ModalHeader toggle={this.props.toggleSignIn}>Sign In</ModalHeader>
					<ModalBody>
						<Form action="#soon" method='post'>
							<FormGroup>
									<InputGroup>
									<InputGroupAddon addonType="prepend">
										Email
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									</InputGroupAddon>
						        		<Input type="text" name="user_name" onChange={this.props.handleUserChange} placeholder={this.props.email}/>	 
						        	</InputGroup>
							</FormGroup>
							<FormGroup>
									<InputGroup>
									<InputGroupAddon addonType="prepend">Password</InputGroupAddon>
						        		<Input type="password" onChange={this.props.handlePasswordChange} placeholder={this.props.password}/>	 
						        	</InputGroup>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="success" onClick={this.props.handleSubmit}>Sign In</Button>
						<Button color="secondary" onClick={this.props.toggleSignUp}>Sign Up</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

export class SignUpModal extends React.Component {
	render(){
		return (
			<div>
				<Modal isOpen={this.props.isOpen} toggle={this.props.toggleSignUp}>
					<ModalHeader toggle={this.props.toggleSignUp}>Sign In</ModalHeader>
					<ModalBody>
						<Form action="http://localhost:4000/users/login/v" method='post'>
							<FormGroup>
									<InputGroup>
									<InputGroupAddon addonType="prepend">
										Email
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									</InputGroupAddon>
						        		<Input type="text" placeholder={this.props.email}/>	 
						        	</InputGroup>
							</FormGroup>
							<FormGroup>
									<InputGroup>
									<InputGroupAddon addonType="prepend">Password</InputGroupAddon>
						        		<Input type="password" placeholder={this.props.password}/>	 
						        	</InputGroup>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="success" type="submit">Sign Up</Button>
						<Button color="secondary" onClick={this.props.toggleSignIn}>Sign In</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

