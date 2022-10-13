import { Link } from 'react-router-dom';
import './Nav.css';


export default function Nav(props) {
  return (
    <div className='Nav'>
      <Link className='HomeLink' to='/relatedfeud'>Home</Link>
    </div>
  )
}
