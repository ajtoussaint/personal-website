import scrn from '../../images/Arithmagic3.PNG'
import {Link} from "react-router-dom";

export default function Arithmagic(props){
    return(
        <Link className="project" to="/projects/Arithmagic">
            <h1>Arithmagic</h1>
            <img src={scrn} alt="Arithmagic"></img>
        </Link>
    )
}