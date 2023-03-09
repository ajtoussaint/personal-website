import cert from '../images/RDB_cert.JPG'
import postgreSQL from '../images/PostgreSQL.png'
import bash from '../images/Bash.png'

import Celestial from './projects/Celestial.component'
import WC from './projects/WC.component'
import Salon from './projects/Salon.component'
import Periodic from './projects/Periodic.component'
import Guess from './projects/Guess.component'

export default function RDB(props){
    return(
     <div id="RDBWrapper" className="pageWrapper">
         <h1>free Code Camp Relational Database Certification</h1>
         <a href="https://freecodecamp.org/certification/ajtoussaint/relational-database-v8">
             <img src={cert} alt="certificate"></img>
         </a>
         <h3>Technologies</h3>
         <div className='techRow'>
             <img src={bash} alt="Borne Again Shell"></img>
             <img src={postgreSQL} alt="postgresql"></img>
         </div>
         <h3>Projects</h3>
         <div id='projectsWrapper'>
            <Celestial />
            <WC />
            <Salon />
            <Periodic />
            <Guess />
         </div>

     </div>
    )
 }
