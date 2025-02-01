import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import Contact from './Contact';
import axios from 'axios';



function ParentComponent() {
    const [contactTypes, setContactTypes] = useState([]);

    const fetchContactTypes = async () => {
        try {
            const response = await axios.get('http://localhost:4000/contact/type');
            setContactTypes(response.data);

        } catch (error) {
            console.error('Error fetching contact types:', error); // Add missing quotes
        }
    };

    useEffect(() => {
        fetchContactTypes();
    }, []);


    const handleSubmitClick = async (ev) => {
        ev.preventDefault();

        // Handle form submission

    };

    return (
        <Contact
            handleSubmitClick={handleSubmitClick}
            fetchContactTypes={fetchContactTypes}
            contactTypes={contactTypes}
        />
    );
}

ParentComponent.propTypes = {
    fetchContactTypes: PropTypes.func.isRequired,
    contactTypes: PropTypes.array.isRequired,
};

export default ParentComponent;