import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SaleList = ({ bots, selectBot }) => {

	function renderBots(){
		return bots.map(bot => {
			return (
				<Card key={bot.id}>
					<Card.Content>
						<Image src={bot.image_url} floated='right' size='small'/>
		        <Card.Header>{bot.name}</Card.Header>
		        <Card.Meta>Owner: <Link to={`/users/${bot.owner.id}`} >{bot.owner.username}</Link></Card.Meta>
		        <Card.Description>
							<p>Price: ${bot.price}</p>
							<Button color="green" onClick={()=> selectBot(bot.id)}>Buy {bot.name}!</Button>
		        </Card.Description>
		      </Card.Content>
				</Card>
			)
		})
	}
	return(
		<Card.Group centered>
	      {renderBots()}
	  </Card.Group>
	)
}

export default SaleList