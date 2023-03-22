import eagle from '../images/Eagle.jpg'
import eagle1 from '../images/Eagle1.jpg'
import eagle2 from '../images/Eagle2.jpg'
import eagle3 from '../images/Eagle3.jpg'

export default function Eagle(props){
    return(
        <div className="pageWrapper">
            <img src={eagle} alt="Eagle Scout Medal"></img>
            <p>In 2017 I was honored to be able to achieve the rank of eagle scout within the Boy Scouts of America.
                There are many steps to obtaining the rank and I consider my time in the program to be the foundation
                of my character. Being a boyscout has improved my work ethic, my ability to overcome new challenges, and of course
                taught me to be prepared. 
            </p>
            <p>
            The most notable achievment working towards Eagle Scout is typically the Eagle Project. For my project I constructed a
            fence that severed as a handrail to aid hikers at a local park. The fence was over 200ft in length and was comprised of 3 sections.
            The project involved designing the fence, coordinating and leading volunteers, and completing documentation.
            </p>
            <div id="eaglePhotos">
                <img src={eagle1} alt="Walking Trail"></img>
                <img src={eagle2} alt="Walking Trail"></img>
                <img src={eagle3} alt="Walking Trail"></img>
            </div>
        </div>
    )
}