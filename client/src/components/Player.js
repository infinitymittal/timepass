import React from 'react';

export default class Player {
	
	constructor(userId, name, isHost) {
		this.userId = userId;
		this.name = name;
		this.isHost = isHost;
	}

	toString() {
		let message = this.userId +" "+this.name;
		if(this.isHost)
			message = message+" (Host)";
		return (
			<div>{message}</div>
		);
	}
}