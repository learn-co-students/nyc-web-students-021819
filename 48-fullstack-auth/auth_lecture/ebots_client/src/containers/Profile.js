import React from 'react'
import { Loader, Grid, Segment, Image, Form, Button } from 'semantic-ui-react'
import UserBots from "../components/UserBots"

class Profile extends React.Component {
	state = {
		// user: null,
		balance: 0,
	}
	// componentDidMount(){
	// 	const userId = this.props.match.params.id
	// 	fetch(`http://localhost:3001/api/v1/users/${userId}`)
	// 	.then(res => res.json())
	// 	.then(response => {
	// 		this.setState({user: response})
	// 	})
	// }

	toggleSale = (botID) => {
		fetch(`http://localhost:3001/api/v1/bots/${botID}/toggle_sale`,{
			method: "PATCH"
		})
		.then(res => res.json())
		.then(response => {
			let target = this.props.currentUser.bots.find(bot => bot.id === response.id)
			let copy = [...this.props.currentUser.bots]

			let index = copy.indexOf(target)

			copy[index] = response

			this.props.updateUser({...this.props.currentUser, bots: copy})
		})
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = () => {
		fetch(`http://localhost:3001/api/v1/users/${this.props.currentUser.id}/add_balance`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
				"Authorization": localStorage.getItem("token")
			},
			body: JSON.stringify({balance: this.state.balance})
		})
		.then(res => res.json())
		.then(response => {
			if (response.errors){
				alert(response.errors)
			} else {
				this.props.updateUser(response)
				this.setState({
					balance: 0,
				})
			}
		})
	}

	getNewBot = () => {
		fetch(`http://localhost:3001/api/v1/users/${this.props.currentUser.id}/get_bot`, {
			method: "POST",
		})
		.then(res => res.json())
		.then(response => {
			this.props.updateUser(response)
		})
	}

	render(){

		const { currentUser } = this.props

		if(currentUser){
			return (
				<Grid columns={2} centered>
					<Grid.Column width={3}>
						<Segment>
							<Image src={currentUser.avatar_url} fluid />
							<strong>{currentUser.username}</strong><br/>
							<strong>{currentUser.name}</strong>
							<p>Balance: ${currentUser.balance}</p>
							<p>{currentUser.bio}</p>
						</Segment>
							<Segment>
								<Form onSubmit={this.handleSubmit}>
									<Form.Field>
							      <label>Add to your balance!</label>
							      <input type="number" onChange={this.handleChange} name="balance" value={this.state.balance} placeholder='Additional Balance' />
							    </Form.Field>
							    <Button type='submit'>Add</Button>
								</Form>
							</Segment>

					</Grid.Column>
					<Grid.Column width={9}>
						<Segment>
							<Button onClick={this.getNewBot}>Roll the dice!</Button>
							<UserBots bots={currentUser.bots} toggleSale={this.toggleSale}/>
						</Segment>
					</Grid.Column>
				</Grid>
			)
		} else {
			return <Loader />
		}
	}
}

export default Profile