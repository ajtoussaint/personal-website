import postgreSQL from '../images/PostgreSQL.png'

import RDBCert from './projects/RDBCert.component'
import Salon from './projects/Salon.component'
import Periodic from './projects/Periodic.component'
import Guess from './projects/Guess.component'
import Celestial from './projects/Celestial.component'

export default function SQL(props){
    return(
    <div className='pageWrapper'>
      <div className='skillImages'>
        <div>
            <h1>PostgreSQL</h1>
            <img src={postgreSQL} alt="postgresql"></img>
        </div>
      </div>
      <div className='skillDescription'>
        <p>While earning my relational databases certification I
            have become experience with using SQL to create and 
            manage databases through PostgreSQL. Many of my personal
            projects use NoSQL databases due to the lower upfront work
            for a small project. But I have found that sometimes I would
            have been better off constructing a relational datbase in the 
            long run.
        </p>
      </div>
      <h3>Some Related Projects:</h3>
      <div id='projectsWrapper'>
        <RDBCert />
        <Salon />
        <Periodic />
        <Guess />
        <Celestial />
      </div>
    </div>
    )
}