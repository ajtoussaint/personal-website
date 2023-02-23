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
        <div className='navSec'>
          <h2>Projects</h2>
          <b>Personal Projects</b>
          <Link>Together Cars</Link>
          <Link>Bekenstein Limit</Link>
          <Link>Arithmagic</Link>
          <Link>Debt Calculator</Link>
        </div>
        <div className='navSec'>
          <h2>Skills</h2>
          <Link>nav1</Link>
          <Link>nav2</Link>
          <Link>nav3</Link>
        </div>
        <div className='navSec'>
          <h2>Work Experience</h2>
          <Link>nav1</Link>
          <Link>nav2</Link>
          <Link>nav3</Link>
        </div>
        <div className='navSec'>
          <h2>Other</h2>
          <Link>nav1</Link>
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
