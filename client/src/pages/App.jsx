import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import userService from '../utils/user.util';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import UserPage from './UserPage';
import userUtil from '../utils/user.util';

function App() {
	let userTemp = userService.getUser()
	const user = userTemp ? userTemp.user : null;

	function handleLogout(){
		userUtil.logout();
	}

	return (
		<Router>
			<Menu user={user} handleLogout={handleLogout} />
			<Container>
				<Switch>
					<Route 
						path='/user/:username' 
						component={params => <UserPage user={user} params={params} />} 
					/>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/signup'>
						<Signup />
					</Route>
					<Route path='/'>
						<Home user={user} />
					</Route>
				</Switch>
			</Container>
			{/* <Footer /> */}
		</Router>
	);
	
}

export default App;