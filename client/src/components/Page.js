import React from 'react';

const PageEnum = Object.freeze({'Landing':1, 'Waiting':2, 'Game':3,});
export default class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page:PageEnum.Landing,
		};
	}
	
	render() {
		
		return null;
	}
}

