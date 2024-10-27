import UploadButton from "./UploadButton";
import ButtonSaveProject from "./ButtonSaveProject";
import PropTypes from 'prop-types';

function Form({ jsonData, handleInputValue, handleClickCreate }) {

    const handleInput = (ev) => {
        handleInputValue(ev.currentTarget.id, ev.currentTarget.value);

    }
    const updateProjectImage = (img) => {
        handleInputValue('image', img);
    }
    const updateAuthorPhoto = (img) => {
        handleInputValue('photo', img);
    }



    return (
        <>
            <form className="addForm" onSubmit={ev => { ev.preventDefault(); }}>

                <h2 className="title">Information</h2>

                <fieldset className="addForm__group" >
                    <legend className="addForm__litle" >Add Projects</legend>
                    <input
                        className="addForm__input"
                        type="text"
                        name="project_name"
                        id="project_name"
                        value={jsonData.project_name}
                        placeholder="Project name"
                        onChange={handleInput}
                    />

                    <input className="addForm__input"
                        type="text"
                        name="project_slogan"
                        id="project_slogan"
                        value={jsonData.project_slogan}
                        placeholder="Slogan"
                        onChange={handleInput}
                    />

                    <div className="addForm__2col">
                        <input
                            className="addForm__input"
                            type="url"
                            name="project_repo"
                            id="rproject_epo"
                            value={jsonData.project_repo}
                            placeholder="Repository"
                            onChange={handleInput}
                        />
                        <input
                            className="addForm__input"
                            type="url"
                            name="project_demo"
                            id="project_demo"
                            value={jsonData.project_demo}
                            placeholder="Demo"
                            onChange={handleInput}
                        />
                    </div>
                    <input
                        className="addForm__input"
                        type="text"
                        name="project_technologies"
                        id="project_technologies"
                        value={jsonData.project_technologies}
                        placeholder="Technology"
                        onChange={handleInput}
                    />
                    <textarea
                        className="addForm__input"
                        type="text"
                        name="project_description"
                        id="project_description"
                        value={jsonData.project_description}
                        placeholder="Project Description"
                        rows="5"
                        onChange={handleInput}
                    ></textarea>
                </fieldset>
                <fieldset className="addForm__group">
                    <legend className="addForm__title">Tell us about the author</legend>
                    <input
                        className="addForm__input"
                        type="text"
                        name="author_name"
                        id="author_name"
                        value={jsonData.author_name}
                        placeholder="Name"
                        onChange={handleInput}
                    />
                    <input
                        className="addForm__input"
                        type="text"
                        name="author_job"
                        id="author_job"
                        value={jsonData.author_job}
                        placeholder="Job"
                        onChange={handleInput}
                    />
                </fieldset>

                <fieldset className="addForm__group--upload">
                    <UploadButton text='Project photo uploading' updateAvatar={updateProjectImage} />
                    <UploadButton text='Author photo uploading' updateAvatar={updateAuthorPhoto} />
                    <ButtonSaveProject onClick={handleClickCreate} />
                </fieldset>

            </form>
        </>
    );
}

Form.propTypes = {
    handleClickCreate: PropTypes.func.isRequired,
    handleInputValue: PropTypes.func.isRequired,
    jsonData: PropTypes.array.isRequired,
};

export default Form;