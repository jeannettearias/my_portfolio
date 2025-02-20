import PropTypes from 'prop-types';

function CleanContact({ handleSubmitClick }) {

    const cleanFormContact = (ev) => {
        ev.preventDefault();

        if (ev.target.id === 'reason') {
            ev.target.value = '';
        }
        if (ev.target.id === 'textarea') {
            ev.target.value = '';
        }


        handleSubmitClick(ev);
    };

    return (
        <>
        </>
    );
}

CleanContact.propTypes = {
    handleSubmitClick: PropTypes.func.isRequired,
    cleanFormContact: PropTypes.func.isRequired
};

export default CleanContact;