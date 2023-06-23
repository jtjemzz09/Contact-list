import ContactList from './components/ContactList.jsx';
import './App.css'
import React from 'react';
import { useState } from 'react';
import dummyContacts from './components/ContactList.jsx';



 function App() {
  const [contacts, setContacts] = useState(dummyContacts)
console.log("Contacts: ", contacts)
  return (
    <>
    <ContactList/>
    </>
  )
}

export default App
