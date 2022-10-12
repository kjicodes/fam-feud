import './GameButton.css';

export default function GameButton(props) {
  return (
    <div className="GameBtn">
      <h3>{props.status}</h3>
      <div className="GameBtns">
        <button id="add" onClick={props.addPoints}>ADD 20</button>
        <button id="strike" onClick={props.updateChances}>STRIKE</button>
      </div>
    </div>
  )
}
