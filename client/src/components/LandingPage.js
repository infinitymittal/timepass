import React from 'react';

export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			gameId: 'GAME',
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
		alert('A name was submitted: ' + this.state.name);
		event.preventDefault();
	}

	
	render() {
		const message = 'Time to play Mafia!!';
		return (
			<div className='Page'>
				<div>{message}</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>Name:</label>
						<input type="text" value={this.state.name} onChange={this.handleNameChange} />
						<hr/>
						<label>
							Join Game:
							<input type="text" value={this.state.gameId} onChange={this.handleGameIdChange} />
						</label>
						<hr/>
						<input type="submit" value="Start"/>
					</form>
				</div>
			</div>
		);
	}
}

