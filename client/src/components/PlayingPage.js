import React from 'react';

export const PhaseEnum = Object.freeze({
	'Discuss1':'First Discussion', 
	'Vote1':'Initial Voting', 
	'Discuss2':'Second Discussion', 
	'Vote2':'Final Voting', 
	'Night':'Sleeping',
});

const AllowedEnum = Object.freeze({'Yes':'Yes', 'No':'No', 'Checking':'Checking'});

export default class PlayingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players:props.players,
			gameId:props.gameId,
			phase:PhaseEnum.Discuss1,
			canChangePhase:AllowedEnum.No,
		};
		this.handleGetRole = this.handleGetRole.bind(this);
		this.handlePhaseChange = this.handlePhaseChange.bind(this);
		this.getCanPhaseChange = this.getCanPhaseChange.bind(this);
	}
	
	handleGetRole() {
		const role = "Mafia"; //TODO get role from server
		const message = "You are a "+role;
		alert(message);
	}
	
	handlePhaseChange() {
		this.setState({
			phase:this.getNextPhase(),
			canChangePhase:AllowedEnum.No,
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
	
	getCanPhaseChange() {
		const allowed = Math.floor(Math.random()*2)===0; //TODO get from server
		if(allowed)
			this.setState({
				canChangePhase:AllowedEnum.Yes,
			});
		else {
			this.setState({
				canChangePhase:AllowedEnum.Checking,
			});
			setTimeout(this.getCanPhaseChange, 5000);
		}
	}

	getPhaseActions() {
		switch(this.state.canChangePhase) {
			default:
			case AllowedEnum.Yes:
				const nextPhase = this.getNextPhase();
				const buttonText = "Start "+nextPhase;
				const phaseActions = (
					<button onClick={()=>this.handlePhaseChange()}>{buttonText}</button>
				);
				return phaseActions;
			case AllowedEnum.No:
				setTimeout(this.getCanPhaseChange, 1000);
				//fall through
			case AllowedEnum.Checking:
				const message = "Waiting to be allowed phase change.";
				return (<div>{message}</div>);
		}
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