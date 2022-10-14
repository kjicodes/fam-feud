import { Link } from 'react-router-dom';
import './NavHome.css';

export default function NavHome(props) {
  return (
    <div className='NavHome'>
      <Link className='NavLink' to="/warfeud/new">Create Team</Link>
      <Link className='NavLink' to="/warfeud">Home</Link>
    </div>
  )
}
