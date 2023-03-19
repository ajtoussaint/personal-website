import { Link } from 'react-router-dom'

import chai from '../images/Chai.png'



export default function Chai(props){
  return(
    <div className='pageWrapper'>
      <div className='skillImages'>
        <div>
            <img src={chai} alt="pug"></img>
        </div>
      </div>
      <div className='skillDescription'>
        <p>I was introduced to chai testing throught the
            freeCodeCamp <Link to="/qualifications/QA">quality assurance certification</Link>. 
            Where I used it to perform unit tests and functional tests for serveral projects.
        </p>
      </div>
    </div>
  )
}