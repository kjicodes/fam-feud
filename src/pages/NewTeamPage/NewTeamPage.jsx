import { Component } from "react";
import { Link } from "react-router-dom";
import "./NewTeamPage.css";

import NewTeamForm from '../../components/NewTeamForm/NewTeamForm';
import NewTeamPost from '../../components/NewTeamPost/NewTeamPost';

export default class NewTeamPage extends Component {

  state = {
    teams: []
  }

  

  getTeams = async () => {
    await fetch("/api")
    .then(res => res.json())
    .then(teams => this.setState({ teams }))
  };

  componentDidMount() {
    this.getTeams()
  };

  render() {
    return (
      <div className="NewTeam">
        <h1 className="NewT">NEW TEAM</h1><hr /><br />
        <NewTeamForm getTeams={this.getTeams} />
        <br /><br />
        <Link className='Play' to='/warfeud/game'>PLAY GAME</Link><br /><br /><hr />
        <h2>TEAM HISTORY</h2><br />
        {this.state.teams.length ?
          this.state.teams.map(t => <NewTeamPost post={t} /> )
          :
          <h2>No Teams</h2>
        }
      </div>
    )
  }
}





        {/* <form onSubmit={props.deleteTeam}>
              <button id='x'>X</button>
            </form> */}