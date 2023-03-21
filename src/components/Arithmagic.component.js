import CSharp_logo from '../images/CSharp.png'
import unity from '../images/Unity.png'
import arithmagic1 from'../images/Arithmagic1.PNG'
import arithmagic2 from'../images/Arithmagic2.PNG'
import arithmagic3 from'../images/Arithmagic3.PNG'

export default function Arithmagic(props){
    return(
        <div className="pageWrapper">
            <h1>Andrew Toussaint's Arithmagic</h1>
            <a href="https://play.google.com/store/apps/details?id=com.Saint2.MMR" id='arithmagicLink'>
                <img src={arithmagic2} alt="Arithmagic Icon"></img>
                <img src={arithmagic1} alt="Arithmagic Screenshot"></img>
                <img src={arithmagic3} alt="Arithmagic Screenshot"></img>           
            </a>
            <div className='projectDescription'>
                <h3>Project Overview</h3>
                <p><a href="https://play.google.com/store/apps/details?id=com.Saint2.MMR">Arithmagic</a> is 
                a math-based role playing game that I developed using the Unity game engine. My goal
                in making this game was to provide elementary level kids with a fun way to practice basic 
                addition, subtraction, multiplication, and division. The name is a portmanteau of arithmatic and magic. 
                Unfortunately this pun was not very original so there are other apps that share the same name. Make sure you are 
                looking at the one that has my name in the title and description. By default, the basic
                scripts used in the unity engine depend on C# so I was able to become aquainted with the language while 
                making this project. I also made all of the art and music for the game. I like to use the wizard character 
                as a mascot in all my apps, see if you can spot him around! The game is currently avaialable in the 
                Google Play store for many android devices. </p>
            </div>

            <h3>The Stack:</h3>
            <div className="techRow">
                <img src={CSharp_logo} alt="CSharp"></img>
                <img src={unity} alt="Unity"></img>
                
            </div>
        </div>


    )
}