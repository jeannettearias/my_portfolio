import PropTypes from 'prop-types';
import '../../styles/layout/_contact.scss';
import { useState } from "react"; // Make sure to import useEffect here


function Contact({ handleSubmitClick, contactTypes, inputValues, setInputValues }) {
    const [selectedValue, setSelectedValue] = useState('');

    //inputs data
    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setInputValues(prev => ({ ...prev, [name]: value })); // Update in App
    };

    //select optiontype
    const handleSelectChange = (ev) => {
        const value = ev.target.value;
        setSelectedValue(value);

    };

    //input textarea info
    const handleTextChange = (ev) => {
        const value = ev.target.value;

        setInputValues(prev => ({ ...prev, description: value }));
    };


    const [error, setError] = useState(false);    // ✅ Add error state
    const handleBlur = (event) => {
        if (event.target.validity.patternMismatch) {
            setError(true);
        } else {
            setError(false);
        }
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
                >
                    <option className='select_reason'
                        value="" disabled
                    >Select a type</option>
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
                    name="description"  // ✅ Name must match `inputValues`
                    placeholder="Enter your comments here"
                    value={inputValues.description} // ✅ Use inputValues
                    onChange={handleTextChange}
                    type="text"
                    maxLength={500}
                    required
                />
                <form onSubmit={(ev) => handleSubmitClick(ev, selectedValue)}>

                    <div>
                        <input
                            className="input__field"
                            type="text"
                            inputMode='text'
                            pattern="^[A-Za-zÁÉÍÓÚáéíóúÜüÑñ' ]+$" // ✅ Add pattern for decimal numbers
                            style={{ borderColor: error ? 'red' : 'initial' }} // ✅ Add error style
                            onBlur={handleBlur}
                            maxLength={50}

                            id="name"
                            name="name"
                            value={inputValues.name}
                            onChange={handleChange}
                            required
                            placeholder="Input your name" />
                    </div>
                    <div>
                        <input
                            className="input__field"
                            type="email"
                            inputMode='email'
                            maxLength={50}

                            id="email"
                            name='email'
                            value={inputValues.email}
                            onChange={handleChange}
                            placeholder="e.g. name@email.com" />
                    </div>
                    <div>
                        <input
                            className="input__field"
                            type='tel'
                            inputMode='tel'
                            pattern="^\+?\d{0,3}-?\d{3}-\d{3}-\d{3}$"
                            maxLength={15}

                            id="phone"
                            name='phone'
                            value={inputValues.phone}
                            onChange={handleChange}
                            placeholder="e.g. 765-897-345" />
                    </div>
                    <div className='submit__btn__box'>
                        <button
                            type='submit'
                            className='submit__btn'

                        >Submit</button>
                    </div>
                </form>
            </fieldset>

        </article >
    );
}

Contact.propTypes = {
    handleSubmitClick: PropTypes.func.isRequired,
    contactTypes: PropTypes.array.isRequired,
    inputValues: PropTypes.object.isRequired,
    setInputValues: PropTypes.func.isRequired
}

export default Contact;

