import scrn from '../../images/BED_cert.JPG'
import {Link} from "react-router-dom";

export default function BEDCert(props){
    return(
        <Link className="project" to="/qualifications/BED">
            <h1>Backend Development Certification</h1>
            <img src={scrn} alt="Backend Development Certification"></img>
        </Link>
    )
}