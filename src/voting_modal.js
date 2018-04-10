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
						<Button color="success" type="submit">Sign Up</Button>
						<Button color="secondary" onClick={this.props.toggleSignIn}>Sign In</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

