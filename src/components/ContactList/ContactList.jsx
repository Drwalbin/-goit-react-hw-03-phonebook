import PropTypes from 'prop-types';
import CSS from './ContactList.module.css';

export const ContactList = ({ onDelete, filterArray }) => {
  return (
    <ul className={CSS.list}>
      {filterArray().map(contact => (
        <li key={contact.id} className={CSS.paragraph}>
          <span className={CSS.paragraph}>
            {contact.name}: {contact.number}
          </span>
          <button
            type="button"
            className={CSS.btn}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  filterArray: PropTypes.func.isRequired,
};
