import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ShopPage from './containers/ShopPage'
import Profile from './containers/Profile'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

class App extends Component {
	state = {
		currentUser: null
	}

	logOut = () => {
		localStorage.removeItem("token")
		this.setState({
			currentUser: null
		}, () => {
			this.props.history.push("/login")
		})
	}

	updateUser = (updatedUser) => {
		this.setState({
			currentUser: updatedUser
		})
	}

	componentDidMount(){
		const token = localStorage.getItem("token")

		if (token){
			// load up their shit
			fetch("http://localhost:3001/api/v1/auto_login", {
				headers: {
					"Authorization": token
				}
			})
			.then(res => res.json())
			.then((response) => {
				if (response.errors) {
					alert(response.errors)
				} else {
					this.setState({
						currentUser: response
					})
				}
			})
		}
	}

	setCurrentUser = (response) => {
		this.setState({
			currentUser: response.user
		}, () => {
			localStorage.setItem("token", response.token)
			this.props.history.push(`/profile`)
		})
	}
	render() {
		console.log(this.state)
		return (
			<Grid>
				<Navbar currentUser={this.state.currentUser} logOut={this.logOut}/>
				<Grid.Row centered>
					<Switch>
						<Route path="/profile" render={(routeProps) => {
							return <Profile {...routeProps} updateUser={this.updateUser} currentUser={this.state.currentUser}/>
						}} />
						<Route path="/shop" component={ShopPage} />
						<Route path="/login" render={(routeProps) => {
							return <LoginForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
						}} />
						<Route path="/signup" render={(routeProps) => {
							return <SignupForm {...routeProps} setCurrentUser={this.setCurrentUser}/>
						}} />
					</Switch>
				</Grid.Row>
			</Grid>
		);
	}
}

export default App;
