export default function NewTeamPost(props) {

  return (
    <div>
      <h2>{props.post.name}</h2>
      <button id='x' onClick={props.deleteTeam}>X</button>
    </div>
  )
}
