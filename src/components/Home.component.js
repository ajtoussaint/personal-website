import selfie from "../images/Selfie.jpg"
import osu_o from "../images/O.png"
import fcc from "../images/fcc.jpg"

import html from '../images/HTML.png'
import css from '../images/CSS.png'
import js from '../images/Javascript.png'
import react_logo from '../images/React_logo.png'
import node from '../images/NodeJS.png'
import express from '../images/Express.png'
import mdb from '../images/MongoDB.png'
import postgreSQL from '../images/PostgreSQL.png'
import git from "../images/Git.png"
import CSharp_logo from '../images/CSharp.png'
import unity from '../images/Unity.png'
import EC2 from '../images/EC2.png'

import Together from './projects/Together.component'
import Bekenstein from './projects/Bekenstien.component'
import Arithmagic from "./projects/Arithmagic.component"

import chp from '../images/CHP.png'
import neas from '../images/NEAS.jpg'
import daq from '../images/eec_logo.jpg'

import wizard from "../images/Wizard.png"


import { Link } from "react-router-dom"

export default function Home(props){
    return(
        <div className="pageWrapper" id="homePage">
            <div id="homeBio">
                <img src={selfie} alt="a very handsom engineer" id="selfie"></img>
                <div>
                    <h1>Welcome to my Website!</h1>
                    <p>Hello, my name is Andrew Toussaint. Software developer / Environmental Engineer.
                     Focused, organized, self-starter writing sustainable code to improve work flows.
                    Experience developing and deploying frontend and backend web apps, maintaining documentation, working as part of a multidisciplinary team.
                    Looking to work full time as a software engineer.</p>
                </div>
            </div>
            <br></br>
            <h1>Education</h1>
            <div id="educationImages">
                <img src={osu_o} alt="Ohio State Logo"></img>
                <img src={fcc} alt="Free Code Camp Logo"></img>
            </div>
            <p>In 2021 I graduated fro <Link to="/qualifications/OSU"><b>The</b> Ohio State University</Link> 
            with a bachelors degree in environmental engineering. I had never been fully satisified with environmental 
            engineering as a career path. During my senior year of college I started a personal project to develop and publish
            a videogame as that had always been something I was interested in. This eventually turned into <Link to="/projects/Arithmagic">Arithmagic</Link> and
            I began to consider software engineering as a career path. In 2022 I began completing certifications through the freeCodeCamp program online.
            As my knowledge and skills grew so did my interest in software developement. Now I am fully committed to becoming a software engineer!</p>
            <br></br>
            <h1>Software Skills</h1>
            <p>Click on one of the images below to see the projects and certifications I have worked on regarding each language or technology:</p>
            <div id="techImages">
                <Link to="/skills/HTML"><img src={html} alt="HTML logo"></img></Link>
                <Link to="/skills/HTML"><img src={css} alt="css logo"></img></Link>
                <Link to="/skills/JS"><img src={js} alt="Javascript logo"></img></Link>
                <Link to="/skills/React"><img src={react_logo} alt="React logo"></img></Link>
                <Link to="/skills/Node"><img src={node} alt="Node JS logo"></img></Link>
                <Link to="/skills/Node"><img src={express} alt="Express JS logo"></img></Link>
                <Link to="/skills/Mongo"><img src={mdb} alt="Mongo DB logo"></img></Link>
                <Link to="/skills/PostgreSQL"><img src={postgreSQL} alt="PostgreSQL logo"></img></Link>
                <Link to="/skills/Git"><img src={git} alt="Git logo"></img></Link>
                <Link to="/skills/C"><img src={CSharp_logo} alt="C# logo"></img></Link>
                <Link to="/projects/Arithmagic"><img src={unity} alt="Unity logo"></img></Link>
                <Link to="/projects/TogetherCars"><img src={EC2} alt="AWS EC2"></img></Link>
            </div>
            <br></br>
            <h1>Projects</h1>
            <p>Knowing how to write code and manage systems is nice but it isn't worth much if you don't put it into practice. Here are a few of the personal projects I'm most proud of.</p>
            <div id='projectsWrapper'>
                <Together />
                <Bekenstein />
                <Arithmagic />
            </div>
            <br></br>
            <h1>Work Experience</h1>
            <p>Currently I am an Environmental Engineer-in-Training I at the Kentucky Division for Air Quality. 
                I also have previous experience working as a lab technician and as part of a maintenance crew.
                While these positions may not be software engineering focused, I've still gained valuable skills from all of them 
                such as communication, time management, and working as part of a multidisciplinary team.</p>
            <div id="workWrapper">
                <Link to="/workExperience/DAQ"><img src={daq} alt="EEC Logo"></img></Link>
                <Link to="/workExperience/NEAS"><img src={neas} alt="NEAS Logo"></img></Link>
                <Link to="/workExperience/CHP"><img src={chp} alt="Carillon Park Logo"></img></Link>
            </div>
            <br></br>
            <br></br>
            <img src={wizard} alt={"arithmagic wizard icon"}></img>
        </div>
    )
}