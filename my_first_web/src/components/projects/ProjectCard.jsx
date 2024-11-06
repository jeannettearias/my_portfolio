import PropTypes from 'prop-types';
import '../../styles/App.scss';

function ProjectCard({ jsonData }) {
    return (
        <article className='card'>

            <h2 className="card__projectTitle">
                <span className="card__projectTitle--text" >Personal project card</span>
            </h2>

            <div className="card__author">
                <div className="card__authorPhoto" style={{ backgroundImage: jsonData.author_photo ? `url(${jsonData.author_photo})` : null }} ></div>
                <p className="card__job">{jsonData.author_job || "Full stack Developer"}</p>
                <h3 className="card__name">{jsonData.author_name || "Emmelie Bjôrklund"}</h3>
            </div>

            <div className="card__project">
                <h3 className="card__projectName">{jsonData.project_name || "Elegant Workspace"}</h3>
                <h3 className="card__descriptionTitle">Product description</h3>
                <p className="card__description">{jsonData.project_description || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"} </p>
                <div className="card__technicalInfo">
                    <p className="card__technologies">{jsonData.project_technologies || "React JS - HTML - CSS"}</p>
                    <a className="icon icon__www" href={jsonData.project_demo} title="Haz click para ver el proyecto online">Web link</a>
                    <a className="icon icon__github" href={jsonData.project_repo} title="Haz click para ver el código del proyecto">GitHub link</a>
                </div>
            </div>
        </article>
    );
}
ProjectCard.propTypes = {
    jsonData: PropTypes.object.isRequired,
};

export default ProjectCard;