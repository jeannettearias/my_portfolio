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
                        name="name"
                        id="name"
                        value={jsonData.name}
                        placeholder="Project name"
                        onChange={handleInput}
                    />

                    <div className="addForm__2col">
                        <input
                            className="addForm__input"
                            type="url"
                            name="repo"
                            id="repo"
                            value={jsonData.repo}
                            placeholder="Repository"
                            onChange={handleInput}
                        />
                        <input
                            className="addForm__input"
                            type="url"
                            name="demo"
                            id="demo"
                            value={jsonData.demo}
                            placeholder="Demo"
                            onChange={handleInput}
                        />
                    </div>
                    <input
                        className="addForm__input"
                        type="text"
                        name="technologies"
                        id="technologies"
                        value={jsonData.technologies}
                        placeholder="Technology"
                        onChange={handleInput}
                    />
                    <textarea
                        className="addForm__input"
                        type="text"
                        name="desc"
                        id="desc"
                        value={jsonData.desc}
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
                        name="author"
                        id="author"
                        value={jsonData.author}
                        placeholder="Name"
                        onChange={handleInput}
                    />
                    <input
                        className="addForm__input"
                        type="text"
                        name="job"
                        id="job"
                        value={jsonData.job}
                        placeholder="Trabajo"
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