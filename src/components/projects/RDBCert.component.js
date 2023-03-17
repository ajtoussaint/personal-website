import scrn from '../../images/RDB_cert.JPG'
import {Link} from "react-router-dom";

export default function RDBCert(props){
    return(
        <Link className="project" to="/qualifications/RDB">
            <h1>Relational Databases Certification</h1>
            <img src={scrn} alt="Relational Databases Certification"></img>
        </Link>
    )
}