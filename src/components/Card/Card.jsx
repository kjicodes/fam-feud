export default function Card(props) {
  return (
    <div className="Card">
      {props.answer}
      {props.isPicked}
      {props.score}
    </div>
  )
}

// props: answer (string), isPicked (boolean), Score (number)