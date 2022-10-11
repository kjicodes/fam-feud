import './RoundButton.css';

export default function RoundButton(props) {
  return (
    <div className="RoundBtn">
      <button id="btn">Round {props.round}</button>
    </div>
  )
}

// add handleClick function for button
