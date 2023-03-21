import { Link } from "react-router-dom";

export function Menu(){
    return(
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>                    
                </li>
                <li>
                    <Link to="/Home">Home</Link>                    
                </li>
                <li>
                    <Link to="/contato">Contato</Link>                    
                </li>
            </ul>
        </div>
    )
}