import scrn from '../images/Bekenstien.PNG'
import pug from '../images/Pug.png'
import node from '../images/NodeJS.png'
import express from '../images/Express.png'
import mdb from '../images/MongoDB.png'

export default function Bekenstein(props){
    return(
        <div className="pageWrapper">
            <a href="https://bekenstein-limit.onrender.com">
                <img src={scrn} alt="Bekenstein Limit" className="projectImg"></img>
            </a>
            <div className='projectDescription'>
                <h3>Project Overview</h3>
                <p><a href="https://bekenstein-limit.onrender.com">Bekenstein Limit</a> is a note taking app desgined to help the user organize their thoughts on various 
                subjects. The name is inspired by physicist Jacob Bekenseins theoretical limit of the maximum information that can be stored in a physical location. Notes can be organized into folders and given tags. Filters can then be applied to easily find the note you are looking for. I was inspired to create 
                this app as I found many of the exisitng apps that tackle this problem to be to bulky for basic needs. I personally use it to organize my software engineering notes
                and it has proven much easier than flipping through paper copies. The frontend uses Pug although if I have the chance to redo the app I would use react instead. The
                backend is Node.js and express with a mongoDB Atlas database storing the notes. The application is hosted on render.com. Go check it out!</p>
            </div>
            <h3>The Stack:</h3>
            <div className="techRow">
                <img src={node} alt="nodeJS"></img>
                <img src={express} alt="express"></img>
                <img src={mdb} alt="MongoDB"></img>
                <img src={pug} alt="pug"></img>
            </div>
        </div>
    )
}