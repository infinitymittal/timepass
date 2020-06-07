import React from 'react';

import LandingPage from './LandingPage.js';
import WaitingPage from './WaitingPage.js';

export const PageEnum = Object.freeze({'Landing':'Landing', 'Waiting':'Waiting', 'Playing':'Playing',});
export default class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page:PageEnum.Landing,
			gameId:'',
			name:'',
			userId:'',
		};
	}
	
	startGame(gameId, name) {
		let userId = "user"+Math.ceil((Math.random()*1000)); //TODO: join game on server
		this.setState({
			page:PageEnum.Waiting,
			gameId:gameId,
			name:name,
			userId:userId,
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
						onNewGame={(id, name)=>this.startGame(id, name)}
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