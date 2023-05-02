import styled from "styled-components";
import PropTypes from "prop-types";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../redux/contacts/contacts-createApi";

const Button = styled.button({
  border: "1px solid black",
  marginLeft: 33,
  borderRadius: 5,
  cursor: "pointer",
});
const Li = styled.li({
  marginTop: 5,
  marginBottom: 5,
  padding: 6,
  border: "1px solid black",
  width: 300,
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
});
const Ul = styled.ul({
  listStyle: "square",
  width: 300,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

const ContactList = ({ filter }) => {
  const { data: contacts } = useGetContactsQuery();
  const normalizedFilter = filter.toLowerCase();

  const [onDeleteContacts] = useDeleteContactMutation();

  const getFilteredContacts = (items, filter) => {
    if (filter === "") {
      return items;
    }

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts(contacts, normalizedFilter);

  return (
    <Ul>
      {filteredContacts?.map((contact) => (
        <Li key={contact.id}>
          {contact.name}: {contact.phone}
          <Button onClick={() => onDeleteContacts(contact.id)}>Delete</Button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default ContactList;
