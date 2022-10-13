import { Component } from "react";
import { Link } from "react-router-dom";
import "./NewTeamPage.css";

export default class NewTeamPage extends Component {
  state = {
    teams: [{ name: "The Co-Vengers", players: 4 }],
    name: "",
    players: 3,
  };

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  addTeam = (e) => {
    e.preventDefault();
    console.log(e.target.checkValidity());
    let newTeam = {
      name: this.state.name,
      players: this.state.players,
    };
    this.setState({
      teams: [...this.state.teams, newTeam],
      name: "",
      players: 3,
    });
  };

  render() {
    return (
      <div className="NewTeam">
        <h1 className="NewT">NEW TEAM</h1>
        <hr />
        <br />
        <form onSubmit={this.addTeam}>
          <label>
            <span>NAME: </span>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              pattern=".{2,}"
            />
          </label>
          <br />
          <label>
            <span>PLAYERS: </span>
            <select
              name="players"
              value={this.state.players}
              onChange={this.handleChange}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </label>
          <br />
          <br />
          <button className="CreateBtn">CREATE TEAM</button>
        </form>
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
        <table>
          <tbody>
            {this.state.teams.map((t) => (
              <tr>
                <td>
                  <div>
                    {t.name} - {t.players}
                  </div>
                </td>
                <td>
                  <button id="x">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
