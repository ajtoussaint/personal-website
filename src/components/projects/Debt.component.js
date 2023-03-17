import scrn from '../../images/Bekenstien.PNG'
import {Link} from "react-router-dom";

export default function Debt(props){
    return(
        <Link className="project" to="/projects/Debt">
            <h1>Debt Manager</h1>
            <img src={scrn} alt="Debt Manager"></img>
        </Link>
    )
}