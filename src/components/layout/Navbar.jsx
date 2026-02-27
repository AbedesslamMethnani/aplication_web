import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>ImmoApp</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/annonces">Annonces</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
