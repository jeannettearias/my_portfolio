import { Form } from "react-router-dom";
import Projects from "./Projects";
import PropTypes from 'prop-types';

function NewProject({ jsonData, handleInputValue, handleClickCreate }) {

    //events

    return (
        <main className="main">


            <section className="hero">
                <h2 className="title" >Project List</h2>
                <p className="hero__text" >
                    Online showcase for gathering ideas through technology
                </p>
                <a className="button--link" href="./">
                    See Projects
                </a>
            </section>
            <Projects jsonData={jsonData} />
            <Form
                jsonData={jsonData}
                handleInputValue={handleInputValue}
                handleClickCreate={handleClickCreate}
            />

        </main>
    );
}


NewProject.propTypes = {
    jsonData: PropTypes.object,
    handleInputValue: PropTypes.func,
    handleClickCreate: PropTypes.func,
    handleClearForm: PropTypes.func,

};

export default NewProject;