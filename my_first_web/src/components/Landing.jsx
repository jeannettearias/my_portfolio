import { Link } from "react-router-dom";
import '../styles/App.scss';
import PropTypes from 'prop-types';


function Landing({ projectsArray }) {
    return (

        <main className="main__landing">
            <section className="hero">
                <h2 className="title">Projects</h2>
                <p className="hero__text" >Main projects
                </p>
                <Link to='/newproject' className="button__landing" >NEW PROJECT</Link>
            </section>

            <div className="card__wrap">
                {projectsArray.map((project) => {
                    return (
                        < a href={project.idproject} key={project.idproject} className="detail-link" >
                            <article className="card" key={project.idproject} >
                                <h2 className="card__projectTitle">
                                    <span className="card__projectTitle--text">Personal project card</span>
                                </h2>

                                <div className="card__author" >
                                    <div>
                                        <p className="card__authorphoto" style={background} ></p>
                                    </div>
                                </div>
                            </article>


                        </a>
                    )
                })



        </div>

        </main >
    );
}

export default Landing; 