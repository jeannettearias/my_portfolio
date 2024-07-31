import { useState } from 'react';
import '../styles/App.scss';
import '../styles/layout/_header.scss'
import AboutMe from './pages/AboutMe';
import Landing from './pages/Landing';

function App() {

  const [page, setPage] = useState('/');

  //EVENTS
  const handleClickLink = (ev) => {
    ev.preventDefault();

    setPage(ev.currentTarget.getAttribute('href'));
  };

  return (
    <div className='page darkmode'>
      <header className="header">
        <nav className="menu">
          <ul className="menu__list ">
            <li className="menu__item">
              <a onClick={handleClickLink} href="/" className="menu__link">
                🏠 Home
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
              <a onClick={handleClickLink} href="/contactPage" className="menu__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        {page}
        {page === '/' ? (
          <Landing />
        ) : null}
        {page === '/about-me' ?
          <AboutMe />
          : null
        }
      </main>
    </div>

  );
}

export default App;
