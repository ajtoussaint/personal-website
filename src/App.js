import './App.css';
import { Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div id="appWrapper">
      <div id="banner">
        <div id='bannerMain'>
          <h1>Andrew Toussaint</h1>
        </div>
        <div id='bannerLinks'>
          <Link>nav1</Link>
          <Link>nav2</Link>
          <Link>nav3</Link>
        </div>
      </div>
      <div id="navigate">
        <div className='navSec'>
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
        <div id='navProjects' className='navSec'>
          <h2>Projects</h2>
          <b>Personal Projects</b>
          <Link>Together Cars</Link>
          <Link>Bekenstein Limit</Link>
          <Link>Arithmagic</Link>
          <Link>Debt Calculator</Link>
          <b>Back End Development and APIs</b>
          <Link>Timestamp Microservice</Link>
          <Link>Request Header Parser Microservice</Link>
          <Link>URL Shortener Microservice</Link>
          <Link>Exercise Tracker</Link>
          <Link>File Metadata Microservice</Link>
          <b>Front End Development Libraries</b>
          <Link>Random Quote Machine</Link>
          <Link>Markdown Previewer</Link>
          <Link>Drum Machine</Link>
          <Link>JavaScript Calculator</Link>
          <Link>25 + 5 Clock</Link>
          <b>Javascript Algorithms and Data Structures</b>
          <Link>Palindrome Checker</Link>
          <Link>Roman Numeral Converter</Link>
          <Link>Caesars Cipher</Link>
          <Link>Telephone Number Validator</Link>
          <Link>Cash Register</Link>
          <b>Relational Database</b>
          <Link>Celestial Bodies Database</Link>
          <Link>World Cup Database</Link>
          <Link>Salon Appointment Scheduler</Link>
          <Link>Periodic Table Database</Link>
          <Link>Number Guessing Game</Link>
          <b>Quality Assurance</b>
          <Link>Metric-Imperial Converter</Link>
          <Link>Issue Tracker</Link>
          <Link>Personal Library</Link>
          <Link>Sudoku Solver</Link>
          <Link>American British Translator</Link>
          <b>Responsive Web Design</b>
          <Link>Survey Form</Link>
          <Link>Tribute Page</Link>
          <Link>Technical Documentation Page</Link>
          <Link>Build a Product Landing Page</Link>
          <Link>Build a Personal Portfolio Webpage</Link>
        </div>
        <div className='navSec'>
          <h2>Skills</h2>
          <b>Languages</b>
          <Link>HTML / CSS</Link>
          <Link>JavaScript</Link>
          <Link>SQL</Link>
          <Link>C# / C++</Link>
          <b>Technologies</b>
          <Link>Git / Github</Link>
          <Link>React</Link>
          <Link>Node.js / Express</Link>
          <Link>PostgreSQL</Link>
          <Link>MongoDB/Atlas/Mongoose</Link>
          <Link>Pug</Link>
          <Link>Chai</Link>
        </div>
        <div className='navSec'>
          <h2>Work Experience</h2>
          <Link>Kentucky Division for Air Quality</Link>
          <Link>National Engineer and Architectual Services</Link>
          <Link>Carillon Historical Park</Link>
        </div>
        <div className='navSec'>
          <h2>Other</h2>
          <Link>Eagle Scout</Link>
        </div>
      </div>
      <div id="main">
        <Routes>
          <Route 
          path="/" 
          element={<div>home</div>}
          />
          <Route 
          path="/red" 
          element={<div>red</div>}
          />
        </Routes>
      </div>

    </div>
  );
}

export default App;
