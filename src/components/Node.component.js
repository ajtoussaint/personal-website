import node from '../images/NodeJS.png'
import express from '../images/Express.png'


import BEDCert from './projects/BEDCert.component'
import Together from './projects/Together.component'
import Exercise from './projects/Exercise.component'
import Issue from './projects/Issue.component'
import Translate from './projects/Translate.component'


export default function Node(props){
  return(
    <div className='pageWrapper'>
      <div className='skillImages'>
        <div>
            <img src={node} alt="nodeJS"></img>
            <img src={express} alt="express"></img>
        </div>
      </div>
      <div className='skillDescription'>
        <p>For backend development I use node.js and express to make
            use of my javascript coding skills. Assume any of my projects
            with a backend use these technologies.
        </p>
      </div>
      <h3>Some Related Projects:</h3>
      <div id='projectsWrapper'>
        <BEDCert />
        <Together />
        <Exercise />
        <Issue />
        <Translate />
      </div>
    </div>
  )
}