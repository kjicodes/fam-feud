import { Component } from "react";


export default class NewTeamForm extends Component {
  state = {
    name: ""
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async () => {
    let body = { name: this.state.name }
    let options = {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(body)
    }
    await fetch("/api", options)
    .then(res => res.json())
    .then(data => {
      this.props.getTeams()
      this.setState({ name: '' })
    })
  }


  // addTeam = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.checkValidity());
  //   let newTeam = { name: this.state.name };
  //   this.setState({
  //     teams: [...this.state.teams, newTeam],
  //     name: ""
  //   });
  // };



  render() {
    return (
      <div className="NewTeam">
        <span>NAME: </span>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            pattern=".{2,}"
          />
          <br />
        <button className="CreateBtn" onClick={this.handleSubmit}>CREATE TEAM</button>
      </div>
    );
  }
}



  // addTeam = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.checkValidity());
  //   let newTeam = { name: this.state.name };
  //   this.setState({
  //     teams: [...this.state.teams, newTeam],
  //     name: ""
  //   });
  // };

  // deleteTeam = (e) => {
  //   e.preventDefault()
  //   this.setState({ teams: this.state.teams.filter(team => team !== e.target.value)})
  // }