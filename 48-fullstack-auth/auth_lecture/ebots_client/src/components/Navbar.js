import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
	render(){
		return (
			<Grid.Row>
				<Grid.Column width={16}>
					<Menu>
						<Link className="item" to="/shop">
							Shop
						</Link>
						{this.props.currentUser 
							?
							<Menu.Menu position="right">
								<Link className="item" to={`/profile`}>
									{this.props.currentUser.username} - ${this.props.currentUser.balance}
								</Link>
								<Menu.Item onClick={this.props.logOut}>
									Log out
								</Menu.Item>
							</Menu.Menu>
							:
							<Menu.Menu position="right">
								<Link className="item" to="/login">
									Login
								</Link>
								<Link className="item" to="/signup">
									Sign Up
								</Link>
							</Menu.Menu>
						}
					</Menu>
				</Grid.Column>
			</Grid.Row>
		)
	}
}

export default Navbar