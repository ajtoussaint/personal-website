import './App.css';
import { Routes, Route, Link, Outlet, redirect} from "react-router-dom";

function App() {
  return (
    <div id="appWrapper">
      <div id="banner">
        <div id='bannerMain'>
          <h1>Andrew Toussaint</h1>
        </div>
        <div id='bannerLinks'>
          <a>nav1</a>
          <a>nav2</a>
          <a>nav3</a>
        </div>
      </div>
      <div id="navigate">
        <div className='navSec'>
          <h2>Qualifications</h2>
          <a>nav1</a>
          <a>nav2</a>
          <a>nav3</a>
        </div>
        <div className='navSec'>
          <h2>Projects</h2>
          <a>nav1</a>
          <a>nav2</a>
          <a>nav3</a>
        </div>
        <div className='navSec'>
          <h2>Skills</h2>
          <a>nav1</a>
          <a>nav2</a>
          <a>nav3</a>
        </div>
        <div className='navSec'>
          <h2>Work Experience</h2>
          <a>nav1</a>
          <a>nav2</a>
          <a>nav3</a>
        </div>
        <div className='navSec'>
          <h2>Other</h2>
          <a>nav1</a>
        </div>
      </div>
      <div id="main">
        main
      </div>

    </div>
  );
}

export default App;
