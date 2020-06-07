import React from 'react';

import {PageEnum} from './Page.js';

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			gameId: '',
		};
		
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleGameIdChange = this.handleGameIdChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleGameIdChange(event) {
		this.setState({gameId: event.target.value});
	}

	handleSubmit(event) {
		//Make proper post. Get gameId if needed. Change Page.
		if(this.state.gameId)
			alert(this.state.name+' is joining new game ' + this.state.gameId);
		else
			alert(this.state.name+' is starting a new game ');
		event.preventDefault();
		this.props.onNewGame(this.state.gameId, this.state.name);
	}

	
	render() {
		const message = 'Time to play Mafia!!';
		return (
			<div className='Page'>
				<div>{message}</div>
				<hr/>
				<div>
					<form onSubmit={this.handleSubmit}>
						<input type="text" placeholder="Enter Your Name" value={this.state.name} onChange={this.handleNameChange} />
						<hr/>
						<label>
							Join Existing Game? 
							<input type="text" placeholder="Enter Game Id" value={this.state.gameId} onChange={this.handleGameIdChange} />
						</label>
						<hr/>
						<input type="submit" value="Start"/>
					</form>
				</div>
			</div>
		);
	}
}

