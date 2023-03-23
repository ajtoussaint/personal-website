import './App.css';
import { Routes, Route, Link} from "react-router-dom";

import Home from "./components/Home.component"

import OSU from "./components/OSU.component"

import BED from "./components/BED.component"
import FED from "./components/FED.component"
import JSA from './components/JSA.component'
import RDB from './components/RDB.component'
import QA from './components/QA.component'
import RWD from './components/RWD.component'
import EIT from './components/EIT.component'

import DAQ from "./components/DAQ.component"
import NEAS from "./components/NEAS.component"
import CHP from "./components/CHP.component"

import HTMLCSS from "./components/HTMLCSS.component"
import JS from "./components/JS.component"
import SQL from "./components/SQL.component"
import CSharp from './components/CSharp.component'
import Git from './components/Git.component'
import React from './components/React.component'
import Node from './components/Node.component'
import Mongo from './components/Mongo.component'
import Pug from './components/Pug.component'
import Chai from './components/Chai.component'

import TogetherCars from './components/TogetherCars.component'
import Bekenstein from './components/Bekenstein.component'
import Arithmagic from './components/Arithmagic.component'
import Debt from './components/Debt.component'
import Eagle from './components/Eagle.component'

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
          <Link to="/skills/C">C#</Link>
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
          <Link to="/projects/TogetherCars">Together Cars</Link>
          <Link to="/projects/Bekenstein">Bekenstein Limit</Link>
          <Link to="/projects/Arithmagic">Arithmagic</Link>
          <Link to="/projects/Debt">Debt Calculator</Link>
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
          element={<Home />}
          />
          <Route
          path="/qualifications/OSU"
          element={<OSU />}
          />
          <Route
          path="/qualifications/BED"
          element={<BED />}
          />

          <Route
          path="/qualifications/FED"
          element={<FED />}
          />

          <Route
          path="/qualifications/JSA"
          element={<JSA />}
          />

          <Route
          path="/qualifications/RDB"
          element={<RDB />}
          />

          <Route
          path="/qualifications/QA"
          element={<QA />}
          />

          <Route
          path="/qualifications/RWD"
          element={<RWD />}
          />

          <Route
          path="/qualifications/EIT"
          element={<EIT />}
          />

          <Route
          path="/skills/HTML"
          element={<HTMLCSS />}
          />

          <Route
          path="/skills/JS"
          element={<JS />}
          />

          <Route
          path="/skills/SQL"
          element={<SQL />}
          />

          <Route
          path="/skills/C"
          element={<CSharp />}
          />

          <Route
          path="/skills/Git"
          element={<Git />}
          />

          <Route
          path="/skills/React"
          element={<React />}
          />

          <Route
          path="/skills/Node"
          element={<Node />}
          />

          <Route
          path="/skills/PostgreSQL"
          element={<SQL />}
          />
          
          <Route
          path="/skills/Mongo"
          element={<Mongo />}
          />

          <Route
          path="/skills/Pug"
          element={<Pug />}
          />

          <Route
          path="/skills/Chai"
          element={<Chai />}
          />

          <Route
          path="/workExperience/DAQ"
          element={<DAQ />}
          />

          <Route
          path="/workExperience/NEAS"
          element={<NEAS />}
          />

          <Route
          path="/workExperience/CHP"
          element={<CHP />}
          />

          <Route
          path="/projects/TogetherCars"
          element={<TogetherCars />}
          />

          <Route
          path="/projects/Bekenstein"
          element={<Bekenstein />}
          />

          <Route
          path="/projects/Arithmagic"
          element={<Arithmagic />}
          />

          <Route
          path="/projects/Debt"
          element={<Debt />}
          />

          <Route
          path="/Eagle"
          element={<Eagle />}
          />

        </Routes>
      </div>

    </div>
  );
}

export default App;
