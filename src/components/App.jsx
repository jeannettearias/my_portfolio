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

function App() {

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

  }, []);

  // Get the experence from json data 
  const [exp, setExp] = useState([]);

  useEffect(() => {
    // Set experience data from JSON file
    setExp(expJson);
  }, []);


  // Get the skills from json data
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Set skills data from JSON file
    setSkills(skillsJson);
  }, []);


  // Get the achievements from json data
  const [achievements, setAchievements] = useState([true]); // Set achievements data from JSON file
  const [activeAchievements, setActiveAchievements] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setAchievements(achievementsJson);

    // Filter the data where active is true
    const filteredAchievements = achievementsJson.filter(item => item.active === true);
    setActiveAchievements(filteredAchievements);

    //setFilteredAchievements(achievementsJson.filter((achievement) => achievement.show === true));

  }, [activeAchievements]);

  //HTML
  return (
    <div className="container">
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

        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
