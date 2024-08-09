
import '../styles/App.scss';
import '../styles/layout/_header.scss'

import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';


function App() {


  //EVENTS


  /*
  React Router DOME
  My pages, my routes:
  / -> <Home />
  /experience -> <Experience />
  /projects -> <Projects />
  /aboutMe -> <AboutMe />
  /Contact -> <Contact />
  React library ==> React-router-DOM
 
  */

  return (
    <div className='page darkmode'>
      <header className="header">
        <nav className="menu">
          <ul className="menu__list ">
            <li className="menu__item">
              <Link to="/" className="menu__link">
                🏠
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/experience"
                className="menu__link"
              >
                Experience
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/projects"
                className="menu__link"
              >
                Projects
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/about-me"
                className="menu__link"
              >
                About Me
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/contact"
                className="menu__link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>

        {/* {page === '/' ? <Home /> : null}
        {page === '/Projects' && <Projects />}
        {page === '/experience' ? <Experience /> : null}
        {page === '/about-me' && <AboutMe />}
        {page === '/contact' ? <Contact /> : null} */}

      </main>
    </div>
  );
}

export default App;
