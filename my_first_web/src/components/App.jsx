
import '../styles/App.scss';

import Header from './layout/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

import { Routes, Route } from 'react-router-dom';
import NewProject from './pages/NewProject';
import { useEffect, useState } from 'react';

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
        const app = import.meta.env.DEV ? 'http://localhost:3000/projects' : '/projects';
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

  //Get input values



  //Delete (form, LS, messages)



  //Create project card




  //HTML
  return (
    <div className='page darkmode'>
      <Header />

      <main className='main'>
        <Routes>
          <Route path='/' element={<Home fetchProjects={projectsArray} />} />
          <Route path='/newproject'
            element={<NewProject jsonData={jsonData} />} />
          <Route path='/projects'
            element={<Projects jsonData={jsonData} />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
