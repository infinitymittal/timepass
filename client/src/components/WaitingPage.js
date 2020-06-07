import React from 'react';

export default class WaitingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			gameId: '',
		};
	}

	render() {
		const message = "Waiting for other players to join...";
		return (
			<div className='Page'>
				<hr/>
				<div>{message}</div>
			</div>
		);
	}
}

