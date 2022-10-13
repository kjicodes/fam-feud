import { Link } from 'react-router-dom';
import './NewTeamPage.css';

import Nav from '../../components/Nav/Nav';

export default function NewTeamPage(props) {
  return (
    <div className='NewTeam'>
      <Nav />
      <h1 className='NewT'>NEW TEAM</h1><hr /><br />
      <form>
        <label>
          <span>TEAM NAME: </span>
          <input name='team name' />
        </label><br /><br />
        <button className='CreateBtn'>CREATE TEAM</button>
      </form>

      <br />
      <br />
      <Link className='Play' to='/relatedfeud/game'>PLAY GAME</Link><br />

    </div>
  )
}
