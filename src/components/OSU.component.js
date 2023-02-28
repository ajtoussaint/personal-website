import logo from '../images/OSU.jpg'
import diploma from '../images/OSU_Diploma.jpeg'
import transcript from '../images/UnofficialTranscript.JPG'

export default function OSU(props){

    return(
        <div id="OSUWrapper" className="pageWrapper">
            <div id="OSUimages">
                <img id="OSULogo" src={logo} alt="Go Bucks!"/>
                <img id="OSUDiploma" src={diploma} alt="diploma"/>
            </div>
            <div>
                <h3>Achievements</h3>
                <ul>
                    <li>Graduated Magna Cum Laude with a Bachelors Degree in Environmental Engineering</li>
                    <li>Final GPA of 3.778 (4 point scale)</li>
                </ul>
            </div>
            <div>
                <h3>Relevant Courses</h3>
                <ul>
                    <li>Fundamentals of Engineering Honors 2: Completed robot design project involving C++ code and OSU proteus microcontroller</li>
                    <li>Intro to Digital Logic: Introductory coursework to circuits and digital logic including hands on lab work.</li>
                    <li>Numerical Methods: Mathematical approaches to practical problem solving involving computation</li>
                </ul>
            </div>
            <h3>Unofficial Transcript</h3>
            <p>Official Version available by email or physical copy upon request</p>
            <img id="transcript-img" src={transcript} alt="Unofficial Transcript"></img>
        </div>
    )
}
