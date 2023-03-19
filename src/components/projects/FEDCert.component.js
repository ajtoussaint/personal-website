import scrn from '../../images/FED_cert.JPG'
import {Link} from "react-router-dom";

export default function RWDCert(props){
    return(
        <Link className="project" to="/qualifications/FED">
            <h1>Frontend Development Certification</h1>
            <img src={scrn} alt="Frontend Development Certification"></img>
        </Link>
    )
}