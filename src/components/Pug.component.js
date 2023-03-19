import { Link } from 'react-router-dom'

import pug from '../images/Pug.png'

import Bekenstein from './projects/Bekenstien.component'
import Library from './projects/Library.component'
import Sudoku from './projects/Sudoku.component'

export default function Pug(props){
  return(
    <div className='pageWrapper'>
      <div className='skillImages'>
        <div>
            <img src={pug} alt="pug"></img>
        </div>
      </div>
      <div className='skillDescription'>
        <p>I was introduced to the pug template engine throught the
            freeCodeCamp <Link to="/qualifications/QA">quality assurance certification</Link>. While I prefer
            react for front end needs and find it more intuitive. I have
            also completed a handful of projects using pug.
        </p>
      </div>
      <h3>Some Related Projects:</h3>
      <div id='projectsWrapper'>
        <Bekenstein />
        <Library />
        <Sudoku />
      </div>
    </div>
  )
}