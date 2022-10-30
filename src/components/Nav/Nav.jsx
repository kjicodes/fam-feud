import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {
  return (
    <div className='Nav'>
      <Link className='NavLink' to="/warfeud/game">Play Game</Link>
      <Link className='NavLink' to="/warfeud/new">Create Team</Link>
      <span id="divide">|</span>
      <Link className='NavHome' to="/warfeud">HOME</Link>
    </div>
  )
}
