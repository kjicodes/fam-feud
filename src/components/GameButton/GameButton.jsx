import './GameButton.css';

export default function GameButton(props) {
  return (
    <div className="GameBtn">
      <h3 id="status">{props.status}</h3>
      <div className="GameBtns">
        <button id="add" onClick={props.handleScore}>ADD POINTS</button>
        <button id="strike" onClick={props.handleChances}>STRIKE</button>
      </div>
    </div>
  )
}
