import './App.css';
import { Routes, Route, Link} from "react-router-dom";
import OSU from "./components/OSU.component"

function App() {
  return (
    <div id="appWrapper">
      <div id="banner">
        <div id='bannerMain'>
          <h1>Andrew Toussaint</h1>
        </div>
        <div id='bannerLinks'>
          <Link to="/">Home</Link>
          <a href="mailto: ajtoussaint@gmail.com">ajtoussaint@gmail.com</a>
          <a href="https://github.com/ajtoussaint">Github</a>
          <a href="https://www.linkedin.com/in/andrew-toussaint-9a1411183">Linkedin</a>
        </div>
      </div>
      <div id="navigate">
        <div id="navQualifications"className='navSec'>
          <h2>Qualifications</h2>
          <b>Education</b>
          <Link to="/qualifications/OSU">B.S. Environmental Engineering from The Ohio State University</Link>
          <b>freeCodeCamp</b>
          <Link to="/qualifications/BED">Back End Development and APIs Certification</Link>
          <Link to="/qualifications/FED">Front End Development Libraries Certification</Link>
          <Link to="/qualifications/JSA">Javascript Algorithms and Data Structures Certification</Link>
          <Link to="/qualifications/RDB">Relational Database Certification</Link>
          <Link to="/qualifications/QA">Quality Assurance Certification</Link>
          <Link to="/qualifications/RWD">Responsive Web Design Certification</Link>
          <b>Certifications</b>
          <Link to="/qualifications/EIT">Engineer in Training Certification</Link>
        </div>
        <div id="navSkills" className='navSec'>
          <h2>Skills</h2>
          <b>Languages</b>
          <Link to="/skills/HTML">HTML / CSS</Link>
          <Link to="/skills/JS">JavaScript</Link>
          <Link to="/skills/SQL">SQL</Link>
          <Link to="/skills/C">C# / C++</Link>
          <b>Technologies</b>
          <Link to="/skills/Git">Git / Github</Link>
          <Link to="/skills/React">React</Link>
          <Link to="/skills/Node">Node.js / Express</Link>
          <Link to="/skills/PostgreSQL">PostgreSQL</Link>
          <Link to="/skills/Mongo">MongoDB/Atlas/Mongoose</Link>
          <Link to="/skills/Pug">Pug</Link>
          <Link to="/skills/Chai">Chai</Link>
        </div>
        <div id="navWorkExperience" className='navSec'>
          <h2>Work Experience</h2>
          <Link to="/workExperience/DAQ">Kentucky Division for Air Quality</Link>
          <Link to="/workExperience/NEAS">National Engineer and Architectual Services</Link>
          <Link to="/workExperience/CHP">Carillon Historical Park</Link>
        </div>
        <div id='navProjects' className='navSec'>
          <h2>Projects</h2>
          <b>Personal Projects</b>
          <Link to="/projects/TogetherCars">Together Cars</Link>
          <Link to="/projects/Bekenstein">Bekenstein Limit</Link>
          <Link to="/projects/Arithmagic">Arithmagic</Link>
          <Link to="/projects/Debt">Debt Calculator</Link>
          <b>Back End Development and APIs</b>
          <Link to="/projects/Timestamp">Timestamp Microservice</Link>
          <Link to="/projects/Header">Request Header Parser Microservice</Link>
          <Link to="/projects/URL">URL Shortener Microservice</Link>
          <Link to="/projects/Exercise">Exercise Tracker</Link>
          <Link to="/projects/Metadata">File Metadata Microservice</Link>
          <b>Front End Development Libraries</b>
          <Link to="/projects/Quote">Random Quote Machine</Link>
          <Link to="/projects/Markdown">Markdown Previewer</Link>
          <Link to="/projects/Drum">Drum Machine</Link>
          <Link to="/projects/Calculator">JavaScript Calculator</Link>
          <Link to="/projects/Clock">25 + 5 Clock</Link>
          <b>Javascript Algorithms and Data Structures</b>
          <Link to="/projects/Palindrome">Palindrome Checker</Link>
          <Link to="/projects/Roman">Roman Numeral Converter</Link>
          <Link to="/projects/Casesar">Caesars Cipher</Link>
          <Link to="/projects/Telephone">Telephone Number Validator</Link>
          <Link to="/projects/Cash">Cash Register</Link>
          <b>Relational Database</b>
          <Link to="/projects/Celestial">Celestial Bodies Database</Link>
          <Link to="/projects/WC">World Cup Database</Link>
          <Link to="/projects/Salon">Salon Appointment Scheduler</Link>
          <Link to="/projects/Periodic">Periodic Table Database</Link>
          <Link to="/projects/Guess">Number Guessing Game</Link>
          <b>Quality Assurance</b>
          <Link to="/projects/Convert">Metric-Imperial Converter</Link>
          <Link to="/projects/Issue">Issue Tracker</Link>
          <Link to="/projects/Library">Personal Library</Link>
          <Link to="/projects/Sudoku">Sudoku Solver</Link>
          <Link to="/projects/Translate">American British Translator</Link>
          <b>Responsive Web Design</b>
          <Link to="/projects/Survey">Survey Form</Link>
          <Link to="/projects/Tribute">Tribute Page</Link>
          <Link to="/projects/Technical">Technical Documentation Page</Link>
          <Link to="/projects/Product">Build a Product Landing Page</Link>
          <Link to="/projects/Portfolio">Build a Personal Portfolio Webpage</Link>
        </div>
        <div id="navOther" className='navSec'>
          <h2>Other</h2>
          <Link to="/Eagle">Eagle Scout</Link>
        </div>
      </div>
      <div id="main">
        <Routes>
          <Route 
          path="/" 
          element={<div>home</div>}
          />
          <Route 
          path="/qualifications/OSU" 
          element={<OSU />}
          />
        </Routes>
      </div>

    </div>
  );
}

export default App;
