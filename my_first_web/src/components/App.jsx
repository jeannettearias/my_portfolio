import '../styles/App.scss';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Experience from './layout/Experience';
import Contact from './layout/Contact';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './Landing';
import Home from './layout/Home';
import expJson from '../data/exp.json';

function App() {

  //Global state to hold JSON data
  const [jsonData, setJsonData] = useState({
    project_name: '',
    project_slogan: '',
    project_repo: '',
    project_demo: '',
    project_technologies: '',
    project_description: '',
    author_name: '',
    author_job: '',
    author_photo: '',
    project_image: '',
  });

  //const [messageUrl, setMessageUrl] = useState('');
  //const [messageError, setMessageError] = useState('');
  const [projectsArray, setProjectsArray] = useState([]);

  // Load JSON data on component mount
  useEffect(() => {


    // Fetch data
    const fetchProjects = async () => {
      try {
        const app = import.meta.env.DEV ? 'http://localhost:4000/projects' : '/projects';
        const response = await fetch(app);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjectsArray(data);



      }
      catch (error) {
        console.error('Error loading JSON data:', error);
      }
    }

    fetchProjects();

    //import data from LS (new Project)
    const saveData = localStorage.getItem('formData');
    if (saveData) {
      setJsonData(JSON.parse(saveData));
    }
  }, []);

  // Get the experence from json data 
  const [exp, setExp] = useState([]);

  useEffect(() => {
    setExp(expJson);
  }, []);

  //HTML
  return (
    <>
      <Header />

      <main className="main">

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/projects' element={<Landing
            projectsArray={projectsArray}
            jsonData={jsonData} />} />

          <Route path='/experience' element={<Experience
            exp={exp} />} />
          <Route path='/contact' element={<Contact />}
          />
        </Routes>

      </main>
      <Footer />
    </>
  );
}

export default App;
