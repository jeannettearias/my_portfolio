import { useState } from 'react';
import '../styles/App.scss';
import '../styles/layout/_header.scss'
import Home from './pages/Home';
import Experience from './pages/Experience';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {

  const [page, setPage] = useState('/');

  //EVENTS
  const handleClickLink = (ev) => {
    ev.preventDefault();

    setPage(ev.currentTarget.getAttribute('href'));
  };

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
              <a onClick={handleClickLink} href="/" className="menu__link">
                🏠
              </a>
            </li>
            <li className="menu__item">
              <a onClick={handleClickLink} href="/experience" className="menu__link">
                Experience
              </a>
            </li>
            <li className="menu__item">
              <a onClick={handleClickLink} href="/projects" className="menu__link">
                Projects
              </a>
            </li>
            <li className="menu__item">
              <a onClick={handleClickLink} href="/about-me" className="menu__link">
                About Me
              </a>
            </li>
            <li className="menu__item">
              <a onClick={handleClickLink}
                className="menu__link"
                href="/contactPage">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>

        {page === '/' ? <Home /> : null}
        {page === '/Projects' && <Projects />}
        {page === '/experience' ? <Experience /> : null}
        {page === '/about-me' && <AboutMe />}
        {page === '/contact' ? <Contact /> : null}

        {/* React library ==> React-router-DOM */}

      </main>
    </div>
  );
}

export default App;
