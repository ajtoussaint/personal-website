import git from "../images/Git.png"
import github from "../images/Github.png"


export default function Git(props){
    return(
        <div className="pageWrapper">
            <div className='skillImages'>
                <div>
                    <img src={git} alt="git"></img>
                    <img src={github} alt="github"></img>
                </div>
            </div>
            <div className='skillDescription'>
                <p>Version control is essential if one is going
                    to achieve any substancial work as a programmer in
                    the modern environment. Like many, I use git and github
                    to maintain sanity while working on all my major projects.
                    Checkout my github page <a href="https://github.com/ajtoussaint">here!</a>
                </p>
            </div>
        </div>
    )
}