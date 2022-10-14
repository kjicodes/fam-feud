import { Component } from "react";
import { Link } from "react-router-dom";
// import Nav from "../../components/Nav/Nav";
import "./NewTeamPage.css";

import NewTeamForm from "../../components/NewTeamForm/NewTeamForm";
import NewTeamPost from "../../components/NewTeamPost/NewTeamPost";

export default class NewTeamPage extends Component {
  state = {
    teams: [],
  };

  getTeams = async () => {
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/feuds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt,
        },
        body: JSON.stringify({ teams: this.state.teams }),
      });
      let serverResponse = await fetchResponse.json();
      console.log("Success:", serverResponse);

      this.setState({ teams: [] });
    } catch (err) {
      console.error("Error:", err);
    }
  };

  componentDidMount() {
    this.getTeams();
  }

  render() {
    return (
      <div className="NewTeam">
        <h1 className="NewT">NEW TEAM</h1>
        <hr />
        <br />
        <NewTeamForm getTeams={this.getTeams} />
        <br />
        <br />
        <Link className="Play" to="/warfeud/game">
          PLAY GAME
        </Link>
        <br />
        <br />
        <hr />
        <h2>TEAM HISTORY</h2>
        <br />
        {this.state.teams.length ? (
          this.state.teams.map((t) => <NewTeamPost post={t} />)
        ) : (
          <h2>No Teams</h2>
        )}
      </div>
    );
  }
}
