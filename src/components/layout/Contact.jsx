import PropTypes from 'prop-types';
import '../../styles/layout/_contact.scss';
import { useState } from "react"; // Make sure to import useEffect here


function Contact({ handleSubmitClick, contactTypes }) {
    const [text, setText] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        phone: '',
        status: ''
    });

    //inputs data
    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setInputValues(({ ...inputValues, [name]: value }));
    };

    //select optiontype
    const handleSelectChange = (ev) => {
        setSelectedValue(ev.target.value)
    };

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
                    required>
                    <option className='select_reason' value="" disabled>Select a type</option>
                    {Array.isArray(contactTypes) && contactTypes.map((type) => (
                        <option
                            className='option_reason'
                            key={type.contact_typeid}
                            value={type.contact_typeid}>
                            {type.contact_type}
                        </option>
                    ))}
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
                <form className='input__fields'>
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
                            placeholder="e.g. 765897345" />
                    </div>
                    <div className='submit__btn__box'>
                        <button
                            onSubmit={(ev) => handleSubmitClick(ev, inputValues, selectedValue, text, contactTypes)}
                            type='submit'
                            className='submit__btn'>Submit</button>
                    </div>
                </form>
            </fieldset>
        </article>
    );
}

Contact.propTypes = {
    handleSubmitClick: PropTypes.func.isRequired,
    contactTypes: PropTypes.array.isRequired,
}

export default Contact;

