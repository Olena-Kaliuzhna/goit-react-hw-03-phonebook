import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './Contact.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.wrapper}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
