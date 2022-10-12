import './Header.css';

export default function Header(props) {
  return (
    <div className='Header'>
      <h2>ROUND: {props.round}</h2>
      <h2>ROUND SCORE: {props.score}</h2>
      <h2>CHANCES: {props.chances}</h2>
    </div>
  )
}

// attempts will be numeric (3 attempst)