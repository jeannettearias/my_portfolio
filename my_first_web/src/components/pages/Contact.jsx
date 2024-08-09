import { useState } from "react";

function Contact() {
    const [text, setText] = useState("");

    const handleTextChange = (ev) => {
        setText(ev.target.value);
    };

    return (
        <article>
            <h2>Contact</h2>
            <fieldset className="contact_reason">
                <legend>Contact Form</legend>
                <select className="select_reason"
                    name="reasonContact"
                    id="reason"
                    defaultValue="" >
                    <option value="" disabled>Select a reason</option>
                    <option value="job">Job Offer</option>
                    <option value="feedback">Give Feedback</option>
                    <option value="others">Others</option>
                </select>
                <div>
                    <label htmlFor="reason_text">Comments</label>
                    <textarea
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
            </fieldset>

        </article>
    );
}

export default Contact;

