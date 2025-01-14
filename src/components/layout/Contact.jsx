import '../../styles/layout/_contact.scss';
import { useState } from "react";


function Contact() {
    const [text, setText] = useState("");

    const handleTextChange = (ev) => {
        setText(ev.target.value);

        console.log('text changed');
    };

    const handleSubmitClick = (ev) => {
        //validation 

        ev.preventDefault(ev.target.value);

        console.log('Form submitted');

    }


    return (
        <article className='contact__section'>
            <h1 className='contact__title'>Contact</h1>
            <fieldset className="contact__reason">
                <legend className="home__subtitle">Contact Form</legend>
                <select
                    className="select_reason"
                    name="reasonContact"
                    id="reason"
                    defaultValue="Select a reason" >
                    <option className='select_reason'
                        value="Select a reason" disabled>Select a reason</option>
                    <option className='option_reason' value="job">Job Offer</option>
                    <option className='option_reason' value="feedback">Give Feedback</option>
                    <option className='option_reason' value="others">Others</option>
                </select>
            </fieldset>
            <fieldset className='contact__inputs__form'>
                <legend className="home__subtitle" htmlFor="reason_text">Comments</legend>
                <textarea
                    className="form__text"
                    id="textarea"
                    name="textarea"
                    placeholder="Enter your comments here"
                    value={text}
                    onChange={handleTextChange}
                />

                <form className="input__fields">
                    <input className="input__field" type="text" name="name" id="name" placeholder="Input your name" />
                    <input className="input__field" type="email" id="email" placeholder="input your email" />
                    <input className="input__field" type="numeric" id="phone" placeholder="e.g. 765897345" />
                </form>
                <div className='submit__btn__box'>
                    <button className='submit__btn'
                        onClick={handleSubmitClick}
                    >Submit</button>
                </div>
            </fieldset>
        </article>
    );
}

export default Contact;

