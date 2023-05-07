import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';
import { ContactItemBtn } from './Contact.styled';
export const Contact = ({ item: { id, name, number }, onDelete }) => {
  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <ContactItemBtn aria-label="Delete" onClick={() => onDelete(id)}>
        <TiDelete />
      </ContactItemBtn>
    </>
  );
};

Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
