export default function Header(props) {
  return (
    <div>
      <div className="Above">
        <h3>ROUND {props.round} OUT OF 5</h3>
        <h3>ROUND SCORE: {props.roundScore}</h3>
      </div>
      <div className="Below">
        <h2>TEAM {props.currTeam}'s TURN</h2>
        <h2>TRIES: {props.showX}</h2>
      </div>
    </div>
  )
}

