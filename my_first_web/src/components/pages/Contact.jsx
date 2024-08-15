import '../../styles/layout/_contact.scss';
import { useState } from "react";


function Contact() {
    const [text, setText] = useState("");

    const handleTextChange = (ev) => {
        setText(ev.target.value);
    };

    return (
        <article>
            <h2>Contact</h2>
            <fieldset className="contact__reason">
                <div className="reason__inputs__box">
                    <legend className="form__legend">Contact Form</legend>
                    <select className="select_reason"
                        name="reasonContact"
                        id="reason"
                        defaultValue="" >
                        <option value="" disabled>Select a reason</option>
                        <option value="job">Job Offer</option>
                        <option value="feedback">Give Feedback</option>
                        <option value="others">Others</option>
                    </select>

                    <label className="form__label" htmlFor="reason_text">Comments</label>
                    <textarea
                        className="form__text"
                        id="textarea"
                        name="textarea"
                        rows="10"
                        cols="20"
                        placeholder="Enter your comments here"
                        value={text}
                        onChange={handleTextChange}
                        style={{
                            border: '1px solid #ccc',
                            padding: '10px',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '14px',
                            width: '100%',
                        }}
                    />
                </div>
                <div className="input__fields">
                    <input className="input__field_1" type="text" name="name" id="name" placeholder="Input your name" />
                    <input className="input__field_2" type="email" id="email" placeholder="input your email" />
                    <input className="input__field_3" type="numeric" id="phone" placeholder="e.g. 765897345" />
                </div>
            </fieldset>

        </article>
    );
}

export default Contact;

