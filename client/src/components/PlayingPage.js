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
			role:"An Unknown",
		};
		this.handleGetRole = this.handleGetRole.bind(this);
		this.getState = this.getState.bind(this);
		this.interval = setInterval(this.getState, 1000);
	}
	
	componentDidMount() {
		fetch('http://localhost:8080/game/game123/player/player123/role')
			.then(res => res.json())
			.then(data => {
				this.setState({
					role:data.roleName,
				})
			})
			.catch(console.log);
	}
	
	getState() {
		const stateChanged = Math.floor(Math.random()*2)===0; //TODO get from server
		const newPhase = this.getNextPhase(); //TODO get from server
		if(!stateChanged)
			return;
		this.setState({
			phase:newPhase,
		});
	}

	handleGetRole() {
		const message = "You are a "+this.state.role;
		alert(message);
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
		switch(this.state.phase) {
			default:
			case PhaseEnum.Discuss1: 
				return (<div>"Discuss with others."</div>);
			case PhaseEnum.Vote1:
				return (
					<div>"Cast Vote for Initial Voting:Drop down with button."</div> //TODO
				);
			case PhaseEnum.Discuss2:
				return (<div>"Discuss with others."</div>);
			case PhaseEnum.Vote2:
				return (
					<div>"Cast Vote for Final Voting:Drop down with button."</div> //TODO
				);
			case PhaseEnum.Night: 
				return (<div>"Sleep."</div>);;
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
				<hr/>
				<div>{phaseMessage}</div>
				{phaseActions}
			</div>
		);
	}
}