import CSharp_logo from '../images/CSharp.png'
import { Link } from 'react-router-dom'

export default function CSharp(props){
    return(
    <div className='pageWrapper'>
      <div className='skillImages'>
        <div>
            <img src={CSharp_logo} alt="C#"></img>
        </div>
      </div>
      <div className='skillDescription'>
        <p>While learning to use the Unity game engine I became 
            familiar with the syntax of C#. I also had some previous
            experience using C++ in college as part of a robot design
            project. The only notable project I have completed using
            C# is the mobile game <Link to='/projects/Arithmagic'>Arithmagic</Link>.
        </p>
      </div>
    </div>
    )
}