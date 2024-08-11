import '../../styles/layout/_projects.scss'

function Projects({ list }) {

    return (
        <section className="proj__box">
            <h2 className="title__h2">Projects</h2>
            <ul>
                {list.map((obj) => (
                    <li
                        key={obj.name}
                        className="card"
                    >{obj.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
