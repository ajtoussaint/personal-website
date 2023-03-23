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


import { Link } from "react-router-dom"

export default function Home(props){
    return(
        <div className="pageWrapper" id="homePage">
            <div id="homeBio">
                <img src={selfie} alt="a very handsom engineer" id="selfie"></img>
                <div>
                    <h1>Welcome to my Website!</h1>
                    <p>My name is Andrew Toussaint. I'm an aspiring software engineer. 
                        I built this website to showcase my skills and projects. 
                        Keep reading to find out more about me or if your looking for something specific check the links on the left of the page.</p>
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
                <Link to="/qualifications/BED"><img src={mdb} alt="Mongo DB logo"></img></Link>
            </div>
        </div>
    )
}