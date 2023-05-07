import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { List, ContactItem } from './ContactList.styled';
export const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ContactItem key={item.id}>
          <Contact item={item} onDelete={onDelete} />
        </ContactItem>
      ))}
    </List>
  );
};

ContactList.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
