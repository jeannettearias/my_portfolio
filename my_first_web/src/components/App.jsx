
import '../styles/App.scss';

import Header from './layout/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';


import { Routes, Route } from 'react-router-dom';

function App() {
  //STATE VARIABLES

  //CODE WHEN THE PAGE LOAD


  //EVENTS

  //HTML
  return (
    <div className='page darkmode'>
      <Header />

      <main className='main' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} /> {/* there, in the compo = here in the App */}
          <Route path='/experience' element={<Experience />} />
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
