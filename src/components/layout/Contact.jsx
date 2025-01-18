import PropTypes from 'prop-types';
import '../../styles/layout/_contact.scss';
import { useState } from "react";

function Contact({ handleSubmitClick }) {
    const [text, setText] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [inputValues, SetInputValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    //inputs data
    const handleChange = (ev) => {
        const { name, value } = ev.target;
        SetInputValues({
            ...inputValues,
            [name]: value
        });
    };

    //select optiontype
    const handleSelectChange = (ev) => {
        setSelectedValue(ev.target.value)

        console.log('contact form selected');
    }

    //input textarea info
    const handleTextChange = (ev) => {
        setText(ev.target.value);
    };

    return (
        <article className='contact__section'>
            <h1 className='contact__title'>Contact</h1>

            <fieldset className="contact__reason">
                <legend className="home__subtitle">Contact Form</legend>
                <select
                    onChange={handleSelectChange}
                    value={selectedValue}
                    className="select_reason"
                    name="reasonContact"
                    id="reason"
                    required
                    defaultValue="Select a type" >
                    <option className='select_reason'
                        value="Select a reason" disabled>Select a type</option>
                    <option className='option_reason' value="job">Job offer</option>
                    <option className='option_reason' value="feedback">Give feedback</option>
                    <option className='option_reason' value="others">Other</option>
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
                    required />
                <form onSubmit={(ev) => handleSubmitClick(ev, inputValues)}>
                    <div>
                        <input
                            className="input__field"
                            type="text"
                            id="name"
                            name="name"
                            value={inputValues.name}
                            onChange={handleChange}
                            required
                            placeholder="Input your name" />
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            value={inputValues.email}
                            className="input__field"
                            type="email"
                            name='email'
                            id="email"
                            required
                            placeholder="input your email" />
                    </div>
                    <div>
                        <input
                            onChange={handleChange}
                            value={inputValues.phone}
                            className="input__field"
                            type="tel"
                            name='phone'
                            id="phone"
                            required
                            placeholder="e.g. 765897345" />
                    </div>
                    <div className='submit__btn__box'>
                        <button type='submit' className='submit__btn'
                        >Submit</button>
                    </div>
                </form>

            </fieldset>
        </article>
    );
}

Contact.propTypes = {
    handleSubmitClick: PropTypes.func.isRequired
}

export default Contact;

