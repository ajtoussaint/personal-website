import scrn from '../images/Debt.PNG'

import js from '../images/Javascript.png'
import react_logo from '../images/React_logo.png'
import next from '../images/Next.png'

export default function Debt(props){
    return(
        <div className="pageWrapper">
            <a href="https://next-debt-manager.vercel.app/">
                <img src={scrn} alt="Debt Manager" className="projectImg"></img>
            </a>
            <div className='projectDescription'>
                <h3>Project Overview</h3>
                <p><a href="https://next-debt-manager.vercel.app/">Debt Manager</a> is a web app that calculates the time it will take to pay off debts based on principal and interest rates.
                This was the first unprompted personal project that I made so while it is somewhat simple I'm proud of it regardless. The app uses a react frontend which also handles all of 
                the calculation and is boosted by next.js. It is hosted on vercel.com</p>
            </div>
            <h3>The Stack:</h3>
            <div className="techRow">
                <img src={react_logo} alt="React"></img>
                <img src={js} alt="javascript"></img>
                <img src={next} alt="Next JS"></img>
            </div>
        </div>
    )
}