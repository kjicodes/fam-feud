import { Link } from "react-router-dom";
import "./HomePage.css";


export default function HomePage(props) {
  return (
    <div className="Home">
      <h1 className="Title">WE'RE ALL RELATED Feud</h1>
      <br />
      <p className="Instr">
        Families fight all the time. Nevertheless, we are still related.
      </p>
      <p className="Instr">
        Get your families together to enjoy a night of{" "}
        <span className="Related">WE'RE ALL RELATED Feud</span>.
      </p>
      <hr />
      <p className="Instructions">INSTRUCTIONS</p>
      <p>
        There are 3 rounds. 
        When a player guesses correctly, hit the "ADD POINTS" button to add 20 points per correct guess. 
        If a player guesses incorrectly, hit the "STRIKE" button to deduct a chance. 
        Each player has 3 chances. 
        Proceed to the next round once the Round Score hits 100 points.
        The game ends when there are no more chances.  
      </p>
      <p>
        To play, create a <span className="Team">new team</span> using the link
        below.
      </p>
      <br />
      <p></p>
      <Link className="New" to="/warfeud/new">
        New Team
      </Link>
      <br />
      <br />
    </div>
  );
}
