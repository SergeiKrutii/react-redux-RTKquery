import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = (props) => {
  const [filter, setfilter] = useState("");

  const onChangeFilter = (e) => {
    setfilter(e.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      <ContactList filter={filter} />
    </>
  );
};

export default App;
