import React from "react";
import Contact from "../Contact";
import PropTypes from "prop-types";
import { Ul } from "./styled";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map((contact) => {
        const { id } = contact;
        return (
          <Contact key={id} contact={contact} onDelete={() => onDelete(id)} />
        );
      })}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
