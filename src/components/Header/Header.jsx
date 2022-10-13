import './Header.css';

export default function Header(props) {
  return (
    <div className='Header'>
      <div>
        ROUND: {props.round} 
      </div>
      <div>
        ROUND SCORE: {props.roundScore}
      </div>
      <div>
        CHANCES: {props.chances}
      </div>
    </div>
  )
}

// attempts will be numeric (3 attempst)