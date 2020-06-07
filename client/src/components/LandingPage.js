import React from 'react';

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
		let message;
		if(this.state.gameId)
			message = this.state.name+' is joining game ' + this.state.gameId;
		else
			message = this.state.name+' is starting a new game.';
		alert(message);
		event.preventDefault();
		this.props.onNewGame(this.state.gameId, this.state.name);
	}

	
	render() {
		return (
			<div className='Page'>
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

