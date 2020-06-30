import React from 'react'
// import { Button } from 'antd'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
const App = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/login" exact component={Login}></Route>
			<Route path="/" component={Admin}></Route>
		</Switch>
	</BrowserRouter>
)

export default App
