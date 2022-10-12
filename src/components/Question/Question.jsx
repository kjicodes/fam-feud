import './Question.css';

export default function Question(props) {
  return (
    <div className="Question">
      <h2>{props.question}</h2>
    </div>
  )
}
