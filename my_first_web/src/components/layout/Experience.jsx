
import '../../styles/layout/_experience.scss';
import PropTypes from 'prop-types';

function Experience({ experience }) {
    //code



    return (
        <section className='exp__section'>
            <form>
                <fieldset className='project__data'>
                    <legend>{experience}</legend>
                    <p className="text">Product Owner</p>
                    <p className="text">Entelgy</p>
                    <time className="datetime" >Currently</time>
                </fieldset>

                <fieldset className="description__container">
                    <legend>Job Description</legend>
                    <p className="text">
                        Working at OpenBank by Entelgy.</p>
                </fieldset>
            </form>
        </section>
    );
}

Experience.propTypes = {
    experience: PropTypes.object.isRequired
}

export default Experience;

