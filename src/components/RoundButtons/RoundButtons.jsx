import RoundButton from '../RoundButton/RoundButton';
import './RoundButtons.css';

export default function RoundButtons(props) {
  return (
    <div className="RoundBtns">
        <RoundButton round={1} />
        <RoundButton round={2} />
        <RoundButton round={3} />
    </div>
  )
}
