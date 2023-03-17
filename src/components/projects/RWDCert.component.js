import scrn from '../../images/RWD_cert.JPG'
import {Link} from "react-router-dom";

export default function RWDCert(props){
    return(
        <Link className="project" to="/qualifications/RWD">
            <h1>Responsive Web Design Certification</h1>
            <img src={scrn} alt="Responsive Web Design Certification"></img>
        </Link>
    )
}