import React from 'react';

import LandingPage from './LandingPage.js';

export const PageEnum = Object.freeze({'Landing':'Landing', 'Waiting':'Waiting', 'Playing':'Playing',});
export default class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page:PageEnum.Landing,
			gameId:'',
			name:'',
		};
	}
	
	startGame(gameId, name) {
		this.setState({
			page:PageEnum.Waiting,
			gameId:gameId,
			name:name,
		});
	}
	
	render() {
		return <LandingPage onNewGame={(id, name)=>this.startGame(id, name)}/>;
	}
}

