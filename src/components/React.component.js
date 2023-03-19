import react_logo from '../images/React_logo.png'

import FEDCert from './projects/FEDCert.component'
import Bekenstein from './projects/Bekenstien.component'
import Debt from './projects/Debt.component'


export default function HTMLCSS(props){
  return(
    <div className='pageWrapper'>
      <div className='skillImages'>
      <img src={react_logo} alt="React"></img>
      </div>
      <div className='skillDescription'>
        <p>Many of my projects, including this website, use React
            to create front end apps that are responsive and visually
            appealing.
        </p>
      </div>
      <h3>Some Related Projects:</h3>
      <div id='projectsWrapper'>
        <FEDCert />
        <Bekenstein />
        <Debt />
      </div>
    </div>
  )
}