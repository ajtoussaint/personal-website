import scrn from '../../images/Together.PNG'
import {Link} from "react-router-dom";

export default function Together(props){
    return(
        <Link className="project" to="/projects/TogetherCars">
            <h1>Together Cars</h1>
            <img src={scrn} alt="Together Cars App"></img>
        </Link>
    )
}