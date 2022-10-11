import './RoundButton.css';

export default function RoundButton(props) {
  return (
    <div className="Btn">
      <button id="btn">Round {props.round}</button>
    </div>
  )
}
