import React from 'react'
import Team from './Team'

const TeamList = ({ teams, selectPlayer }) => {

  const renderedTeams = teams.map(team => {
    return <Team key={team.id} team={team} selectPlayer={selectPlayer} />
  })

  return (
    <div className="team-list">
      {renderedTeams}
    </div>
  )
}

export default TeamList
