import React from 'react';

import LandingPage from './LandingPage.js';
import WaitingPage from './WaitingPage.js';
import PlayingPage from './PlayingPage.js';
import Player from './Player.js';

export const PageEnum = Object.freeze({'Landing':'Landing', 'Waiting':'Waiting', 'Playing':'Playing',});

export default class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page:PageEnum.Landing,
			gameId:'',
			name:'',
			userId:'',
			players:[],
			currentPlayer:null,
		};
	}
	
	startGame(gameId, name) {
		let isHost = gameId?false:true;
		if(!gameId)
			gameId = "game"+Math.ceil((Math.random()*1000)); //TODO: start game on server
		let userId = "user"+Math.ceil((Math.random()*1000)); //TODO: join game on server
		let player = new Player(userId, name, isHost);
		this.setState({
			page:PageEnum.Waiting,
			gameId:gameId,
			name:name,
			userId:userId,
			players:this.state.players.concat(player),
			currentPlayer: player,
		});
	}
	
	playGame() {
		this.setState({
			page:PageEnum.Playing,
		});
	}
	
	render() {
		const title = "Let us play Mafia!!";
		const name = this.state.name
		const subtitle = "Hello, "+((name)?name:"Stranger");
		let pageToLoad;
		switch(this.state.page) {
			default:
			case PageEnum.Landing:
				pageToLoad = 
					(<LandingPage 
						onNewGame={(id, name)=>this.startGame(id, name)}
					/>);
				break;
			case PageEnum.Waiting:
				pageToLoad = 
					(<WaitingPage 
						players={this.state.players}
						gameId={this.state.gameId}
						onPlayGame={()=>this.playGame()}
					/>);
				break;
			case PageEnum.Playing:
				pageToLoad = 
					(<PlayingPage 
						players={this.state.players}
						gameId={this.state.gameId}
						currentPlayer={this.state.currentPlayer}
					/>);
				break;
		}
		
		return (
			<div className='Page'>
				<div>{title}</div>
				<div>{subtitle}</div>
				{pageToLoad}
			</div>
		);
	}
}