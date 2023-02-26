import scrn from '../../images/Exercise.PNG'

export default function Exercise(props){
    return(
        <a className="project" href="https://github.com/ajtoussaint/fcc-exercise-tracker">
            <h1>Exercise Tracker</h1>
            <img src={scrn} alt="Exercise Tracker Project"></img>
        </a>
    )
}