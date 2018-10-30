import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Home from '../views/home/home.jsx';
import Login from '../views/normal/login.jsx';
class RouterConfig extends React.Component {
	render () {
		return (
			<HashRouter>
				<div>
					{/**/}
					<Route path='/home' component={Home}></Route>
					<Route path='/login' component={Login}></Route>
				</div>
			</HashRouter>
		);
	}
}
export default RouterConfig;