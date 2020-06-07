import React from 'react';

export default class WaitingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players:props.players
		};
	}

	render() {
		const message = "Waiting for more players to join...";
		const playerList = this.state.players.map(player => {
				return (<li key={player.userId}>{player.toString()}</li>);
		});
		return (
			<div className='Page'>
				<hr/>
				<div>{message}</div>
				<ul>{playerList}</ul>
			</div>
		);
	}
}