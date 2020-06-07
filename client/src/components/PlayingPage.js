import React from 'react';

export default class PlayingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players:props.players,
			gameId:props.gameId,
		};
		this.handleGetRole = this.handleGetRole.bind(this);
	}
	
	handleGetRole() {
		const role = "Mafia"; //TODO get role from server
		const message = "You are a "+role;
		alert(message);
	}
	
	render() {
		const waitMessage = "Playing game " +this.state.gameId+". Current Players:";
		const playerList = this.state.players.map(player => {
				return (<li key={player.userId}>{player.toString()}</li>);
		});
		const getRoleText = "See my role.";
		return (
			<div className='Page'>
				<hr/>
				<div>{waitMessage}</div>
				<ul>{playerList}</ul>
				<button onClick={()=>this.handleGetRole()}>{getRoleText}</button>
			</div>
		);
	}
}