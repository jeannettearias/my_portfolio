import { Link } from "react-router-dom";
import '../styles/App.scss';
import PropTypes from 'prop-types';



function Landing({ projectsArray, showNewProjectButton }) {
    return (

        <main className="main__landing">
            <section className="hero">
                <h4 className="title">MAIN PROJECTS</h4>
                {showNewProjectButton && (
                    <Link to='/newproject' className="button__landing" >NEW PROJECT</Link>)}

            </section>

            <div className="card__wrap">
                {projectsArray.map((jsonData) => {
                    return (
                        < a href={jsonData.idproject} key={jsonData.idproject} className="detail-link" >
                            <article className="card" key={jsonData.idproject} >
                                <h2 className="card__projectTitle">
                                    <span className="card__projectTitle--text">Personal project card</span>
                                </h2>

                                <div className="card__author" >
                                    <div className="card__authorPhoto" style={{ background: jsonData.author_photo ? `url(${jsonData.author_photo})` : null }} ></div>
                                    <p className="card__job">{jsonData.author_job || 'Full Stack Developer'} </p>
                                    <h3 className="card__name">{jsonData.author_name || 'Emmelie Bjôrklund'}</h3>
                                </div>

                                <div className="card__project">
                                    <h3 className="card__name card_name">{jsonData.project_name || 'Elegant Workspace'}</h3>
                                    <p className="card__slogan">{jsonData.project_slogan || 'Exclusives Design'}</p>
                                    <h3 className="card__descriptionTitle">jsonData Description</h3>
                                    <p className="card__description">{jsonData.project_description || 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione'}</p>
                                    <div className="card__technicalInfo" >
                                        <p className="card__technologies">{jsonData.project_technologies || 'React JS - HTML - CSS'}</p>
                                        <p className="icon icon__www">{jsonData.project_demo}</p>
                                        <p className="icon icon__hithub">{jsonData.project_repo}</p>
                                    </div>
                                </div>

                            </article>

                        </a>
                    );

                })}
            </div>
        </main >
    );
}
Landing.propTypes = {
    projectsArray: PropTypes.array.isRequired,
    showNewProjectButton: PropTypes.func.isRequired
};

export default Landing; 