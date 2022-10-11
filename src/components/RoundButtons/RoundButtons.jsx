import RoundButton from '../RoundButton/RoundButton';
import './RoundButtons.css';

export default function RoundButtons(props) {
  return (
    <div className="RoudBtns">
        <RoundButton round={1} />
        <RoundButton round={2} />
        <RoundButton round={3} />
        <RoundButton round={4} />
        <RoundButton round={5} />
    </div>
  )
}
