import '../../styles/layout/_project.scss'

function Projects() {


    return (
        <section className="proj__box">
            <h2 className="title__h2">Projects</h2>
            <article className='article__box'>
                <div className='box__project-1'>
                    <img className='object-cover' src="/projects/project-module-2.png"
                        loading='lazy'
                        alt="project-1" />

                </div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </article>
            <article>
                <div>
                    <img className='object-cover' src="/projects/project-module-3.png"
                        loading='lazy'
                        alt="project-2" />
                </div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </article>
        </section>
    );
}
export default Projects;
