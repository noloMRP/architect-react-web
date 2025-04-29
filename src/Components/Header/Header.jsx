import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "/src/Components/Header/header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <div className="logo-container">
            <img src="src\images\Icons\logo.svg" alt="logo" />
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <CustomLink to="/main" className="nav-link">
              Main
            </CustomLink>
            <CustomLink to="/projects" className="nav-link">
              Projects
            </CustomLink>
            <CustomLink to="/certifications" className="nav-link">
              Certifications
            </CustomLink>
            <CustomLink to="/contacts" className="nav-link">
              Contacts
            </CustomLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
// logic for active nav link
// Matches current path to reletive one and assigns "active" to pathname
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
