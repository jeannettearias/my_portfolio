
import '../styles/App.scss';

import Header from './layout/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  //STATE VARIABLES
  const [pets, setPets] = useState([]);


  //CODE WHEN THE PAGE LOAD
  useEffect(() => {
    //code

    fetch('https://igarrido-adalab.github.io/api/pets.json')
      .then(Response => Response.json())
      .then(data => {

        console.log(data);
        setPets(data);
      })
  }, []);

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

  //HTML


  return (
    <div className='page darkmode'>
      <Header />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects list={pets} />} /> {/* there in the compo = here in the App */}
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
