import '../styles/App.scss';
import PropTypes from 'prop-types';

function Landing({ jsonData, projectsArray }) {
    return (

        <>
            <section className="main__landing">

                <div className="preview">
                    <div className='projectImage'>

                        {projectsArray.map((project) => {
                            return (

                                < a href={project.idproject} key={project.idproject} className="detail-link" >
                                    <div style={{ backgroundImage: jsonData.project_image ? `url(${jsonData.project_image})` : null }}></div>
                                    <article className="card" key={project.idproject} >
                                        <h2 className="card__projectTitle">
                                            <span className="card__projectTitle--text">Personal project card</span>
                                        </h2>

                                        <div className="card__author" >
                                            <div className="card__authorPhoto" style={{ background: project.author_photo ? `url(${project.author_photo})` : null }} ></div>
                                            <p className="card__job">{project.author_job || 'Full Stack Developer'} </p>
                                            <h3 className="card__name">{project.author_name || 'Emmelie Bjôrklund'}</h3>
                                        </div>

                                        <div className="card__project">
                                            <h3 className="card__projectName">{project.project_name || 'Elegant Workspace'}</h3>
                                            <p className="card__slogan">{project.project_slogan || 'Exclusives Design'}</p>
                                            <h3 className="card__descriptionTitle">project Description</h3>
                                            <p className="card__description">{project.project_description || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione'}</p>
                                            <div className="card__technicalInfo" >
                                                <p className="card__technologies">{project.project_technologies || 'React JS - HTML - CSS'}</p>
                                                <p className="icon icon__www" href={project.project_demo} title='Click here to see the project' >Web Link</p>
                                                <p className="icon icon__github" href={project.project_repo} title='Click here to see the project code' >Github Link</p>
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
Landing.propTypes = {
    projectsArray: PropTypes.array.isRequired,
    jsonData: PropTypes.object.isRequired
};
export default Landing; 