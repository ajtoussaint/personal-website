import scrn from '../../images/JSA_cert.JPG'
import {Link} from "react-router-dom";

export default function JSACert(props){
    return(
        <Link className="project" to="/qualifications/JSA">
            <h1>Algorithms and Data Structures Certification</h1>
            <img src={scrn} alt="Javascript Algorithms and Data Structures Certification"></img>
        </Link>
    )
}