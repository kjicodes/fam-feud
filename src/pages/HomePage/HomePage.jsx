import { Link } from "react-router-dom";
// import Nav from "../../components/Nav/Nav";
import "./HomePage.css";

export default function HomePage(props) {
  return (
    <main className="Home">
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
    </main>
  );
}
