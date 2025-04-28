import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function Header(){
    
    return(
        <header>
            
            <nav>
                <div className="logo-container">
                    <img src="src\images\Icons\logo.svg" alt="logo" />
                </div>
                    
                    {/* Use Link to create custom routes using react-router-dom(simpler than using switches for different links) */}                <ul>
                    <CustomLink to="/main">MAIN</CustomLink>
                    <CustomLink to="/projects">PROJECTS</CustomLink>
                    <CustomLink to="/certifications">CERTIFICATONS</CustomLink>
                    <CustomLink to="/contacts">CONTACTS</CustomLink>
                    
                </ul>
            </nav>
        </header>
    )
}
// logic for active nav link
// Matches current path to reletive one and assigns "active" to pathname
function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}