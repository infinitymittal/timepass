import React from 'react';

export default class WaitingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players:props.players,
			gameId:props.gameId,
		};
		
		this.handlePlay = this.handlePlay.bind(this);
	}
	
	handlePlay() {
		this.props.onPlayGame();
	}

	render() {
		const gameIdMessage = "Share this game id with other players: "+this.state.gameId;
		const waitMessage = "Waiting for more players to join. Current Players:";
		const playerList = this.state.players.map(player => {
				return (<li key={player.userId}>{player.toString()}</li>);
		});
		const playButtonText = "Play now";
		return (
			<div className='Page'>
				<hr/>
				<div>{gameIdMessage}</div>
				<div>{waitMessage}</div>
				<ul>{playerList}</ul>
				<button onClick={()=>this.handlePlay()}>{playButtonText}</button>
			</div>
		);
	}
}