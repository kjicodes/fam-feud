import './RoundButton.css';

export default function RoundButton(props) {
  return (
    <div className="RoundBtns">
      <button id="btn" onClick={() => props.updateRound(1)}>Round 1</button>
      <button id="btn" onClick={() => props.updateRound(2)}>Round 2</button>
      <button id="btn" onClick={() => props.updateRound(3)}>Round 3</button>
    </div>
  )
}
