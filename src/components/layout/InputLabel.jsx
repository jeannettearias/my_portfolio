import '../../styles/layout/_label.scss';
import PropTypes from 'prop-types';


function InputLabel({ label, inputId, ...props }) {
    return (
        <div className='label__input'>
            <label
                htmlFor={inputId}
                className='labeled-input__label' >
                {label}
            </label>
            <input
                id={inputId}
                className='labeled-input__label'
                {...props}
            />
        </div>
    );
}

InputLabel.propTypes = {
    label: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired
};

export default InputLabel;