import '../styles/App.scss';

import Header from './layout/Header';
import Landing from './Landing';
import Home from './layout/Home';
import Experience from './layout/Experience';
import Contact from './layout/Contact';
import Footer from './layout/Footer';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import expJson from '../data/exp.json';
import skillsJson from '../data/skills.json';
import achievementsJson from '../data/achievements.json';
import projectsJson from '../data/data.json';

function App() {
  // State for projects from JSON data
  const [projectsArray, setProjectsArray] = useState([]);
  // State for skills from JSON data
  const [skills, setSkills] = useState([]);
  // State for achievements from JSON data
  const [achievements, setAchievements] = useState([]);
  // State for active achievements
  const [activeAchievements, setActiveAchievements] = useState([]);
  // State for experience from JSON data
  const [exp, setExp] = useState([]);
  const [contactTypes, setContactTypes] = useState([]);
  const [inputValues, setInputValues] = useState({
    description: '',
    name: '',
    email: '',
    phone: '',
    status: 'A'
  });

  //CONNECT TO BACKEND 

  //List contact types+reasons
  //GET DATA
  const fetchContactTypes = async () => {
    try {
      const response = await fetch('http://localhost:4000/contact/type');
      const data = await response.json();
      setContactTypes(data);

    } catch (error) {
      console.error('Error', error);
    }
  };

  //INSEºRT DATA
  const handleSubmitClick = async (ev) => {
    ev.preventDefault();

    try {
      console.log(inputValues);
      const response = await fetch('http://localhost:4000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputValues),
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Error in the insert', error);  // Add missing quotes
    }

  };

  // Load JSON data on component mount
  useEffect(() => {
    // Set projects data from JSON file
    setProjectsArray(projectsJson);
    // Set experience data from JSON file
    setExp(expJson);
    // Set skills data from JSON file
    setSkills(skillsJson);
    // Set achievements data from JSON file
    setAchievements(achievementsJson);

    // Fetch contact types
    fetchContactTypes();

    // fetch contacts
    setInputValues();


    // Filter the data where active is true
    const filteredAchievements = achievementsJson[0].achievements.filter(item => item.active === true);
    setActiveAchievements(filteredAchievements);
  }, []);

  // HTML
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path='/' element={<Home
          skills={skills}
          achievements={achievements}
          activeAchievements={activeAchievements} />} />
        <Route path='/projects' element={<Landing
          projectsArray={projectsArray} />} />
        <Route path='/experience' element={<Experience
          exp={exp} />} />
        <Route path='/contact'
          element={<Contact
            handleSubmitClick={handleSubmitClick}
            contactTypes={contactTypes}
            inputValues={inputValues} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;