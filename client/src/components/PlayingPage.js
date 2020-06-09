import React from 'react';

export const PhaseEnum = Object.freeze({
	'Discuss1':'First Discussion', 
	'Vote1':'Initial Voting', 
	'Discuss2':'Second Discussion', 
	'Vote2':'Final Voting', 
	'Night':'Sleeping',
});

export default class PlayingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players:props.players,
			gameId:props.gameId,
			phase:PhaseEnum.Discuss1,
		};
		this.handleGetRole = this.handleGetRole.bind(this);
		this.handlePhaseChange = this.handlePhaseChange.bind(this);
		this.getState = this.getState.bind(this);

		this.interval = setInterval(this.getState, 5000);
	}
	
	getState() {
		const stateChanged = Math.floor(Math.random()*2)===0; //TODO get from server
		if(!stateChanged)
			return;
		this.setState({
			phase:this.getNextPhase(),
		});
	}

	
	
	
	handleGetRole() {
		const role = "Mafia"; //TODO get role from server
		const message = "You are a "+role;
		alert(message);
	}
	
	handlePhaseChange() {
		this.setState({
			phase:this.getNextPhase(),
		});
	}
	
	getNextPhase() {
		switch(this.state.phase) {
			case PhaseEnum.Discuss1: return PhaseEnum.Vote1;
			case PhaseEnum.Vote1: return PhaseEnum.Discuss2;
			case PhaseEnum.Discuss2: return PhaseEnum.Vote2;
			case PhaseEnum.Vote2: return PhaseEnum.Night;
			default:
			case PhaseEnum.Night: return PhaseEnum.Discuss1;
		}
	}

	getPhaseActions() {
		const nextPhase = this.getNextPhase();
		const buttonText = "Start "+nextPhase;
		const phaseActions = (
			<button onClick={()=>this.handlePhaseChange()}>{buttonText}</button>
		);
		return phaseActions;
	}
	
	render() {
		const waitMessage = "Playing game " +this.state.gameId+". Current Players:";
		const playerList = this.state.players.map(player => {
				return (<li key={player.userId}>{player.toString()}</li>);
		});
		const getRoleText = "See my role.";
		const phaseMessage = "It is "+this.state.phase+" time.";
		const phaseActions = this.getPhaseActions();
		
		return (
			<div className='Page'>
				<hr/>
				<div>{waitMessage}</div>
				<ul>{playerList}</ul>
				<button onClick={()=>this.handleGetRole()}>{getRoleText}</button>
				<div>{phaseMessage}</div>
				<hr/>
				{phaseActions}
			</div>
		);
	}
}