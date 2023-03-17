import js from '../images/Javascript.png'

import JSACert from './projects/JSACert.component'
import Sudoku from './projects/Sudoku.component'
import Translate from './projects/Translate.component'
import Cash from './projects/Cash.component'
import Roman from './projects/Roman.component'

export default function JS(props){
    return(
        <div className='pageWrapper'>
      <div className='skillImages'>
        <img src={js} alt="javascript"></img>
      </div>
      <div className='skillDescription'>
        <p>Javascript is the language that I mainly work with at the 
            moment and as a result the one I am most comfortable with 
            for solving alogrithmic problems. It's utility extends into
            frontend developement with JSX and react and backend developement
            with Node.js</p>
      </div>
      <h3>Some Related Projects:</h3>
      <div id='projectsWrapper'>
        <JSACert />
        <Sudoku />
        <Translate />
        <Cash />
        <Roman />
      </div>
    </div>
    )
}