import TCimg from "../images/TogetherCars.PNG"
import node from '../images/NodeJS.png'
import express from '../images/Express.png'
import mdb from '../images/MongoDB.png'
import react_logo from '../images/React_logo.png'
import EC2 from '../images/EC2.png'

export default function TogetherCars(props){
    return(
        <div className="pageWrapper">
            <a href="https://togethercars.dev">
                <img src={TCimg} alt="Together Cars" className="projectImg"></img>
            </a>
            <div className='projectDescription'>
                <h3>Project Overview</h3>
                <p><a href="https://togethercars.dev">Together Cars</a> is a web app developed using a React frontend and a Node.js/Express
                backend with mongoDB Atlas as the database. The purpose of the app is to aid in coordinating ride sharing between friends. Users can log in to their profile, create trips, invite other users, mange who will
                be driving and who will be a passenger in which car and share trips by link. The app is currently live on an AWS EC2 server so go check it out and start using cars together! </p>
            </div>
            <h3>The Stack:</h3>
            <div className="techRow">
                <img src={node} alt="nodeJS"></img>
                <img src={express} alt="express"></img>
                <img src={mdb} alt="MongoDB"></img>
                <img src={react_logo} alt="React"></img>
                <img src={EC2} alt="AWS EC2"></img>
            </div>
        </div>
    )
}