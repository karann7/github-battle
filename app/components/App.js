// local imports
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from 'Nav';
import Home from 'Home';
import Popular from 'Popular';
import Battle from 'Battle';
export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route exact path='/popular' component={Popular} />
						<Route render={function(){
							return <p>Not Found</p>
						}}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}