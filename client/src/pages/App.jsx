import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
	state = {
		data: null
	};

	// componentDidMount(){
	// 	this.callBackendAPI()
	// 		.then(res => this.setState({data:res.express}))
	// 		.catch(err => console.log(err));
	// }

	callBackendAPI = async() => {
		const response = await fetch('/api');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message)
		}
		return body;
	};

	render(){
		return (
			<Router>
				<Menu />
				<Container>
					<Switch>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/signup'>
							<Signup />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Container>
				{/* <Footer /> */}
			</Router>
		);
	}
}

export default App;