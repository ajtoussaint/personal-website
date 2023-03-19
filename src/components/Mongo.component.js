import mdb from '../images/MongoDB.png'


import Bekenstein from './projects/Bekenstien.component'
import Together from './projects/Together.component'
import Exercise from './projects/Exercise.component'
import Issue from './projects/Issue.component'
import Library from './projects/Library.component'



export default function Node(props){
  return(
    <div className='pageWrapper'>
      <div className='skillImages'>
        <div>
            <img src={mdb} alt="Mongo DB"></img>
        </div>
      </div>
      <div className='skillDescription'>
        <p>In addition to SQL databases I have also learned to interact
            with no SQL databases in the form of mongoDB. My apps typically
            use the online hosted mongoDB Atlas to set up and query remote databses.
        </p>
      </div>
      <h3>Some Related Projects:</h3>
      <div id='projectsWrapper'>
        <Bekenstein />
        <Together />
        <Exercise />
        <Issue />
        <Library />
      </div>
    </div>
  )
}