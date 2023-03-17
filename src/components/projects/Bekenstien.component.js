import scrn from '../../images/Bekenstien.PNG'
import {Link} from "react-router-dom";

export default function Bekenstein(props){
    return(
        <Link className="project" to="/projects/Bekenstein">
            <h1>Bekenstein Limit</h1>
            <img src={scrn} alt="Bekenstein Limit"></img>
        </Link>
    )
}