import logo from '../images/OSU.jpg'

export default function OSU(props){

    return(
        <div id="OSUWrapper">
            <div id="OSUimages">
                <img id="OSULogo" src={logo} alt="Go Bucks!"/>
                <img id="OSUDiploma" src="#"/>
            </div>
            <p>I attended <b>The</b> Ohio State Universtiy from autumn of 2017
            to Spring of 2021, Graduating with a Bachelors of Science in 
            Environmental Engineering. While a student,  </p>
        </div>
    )
}