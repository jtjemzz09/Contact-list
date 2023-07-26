import ContactList from './components/ContactList.jsx';
import './App.css'
import { useState } from 'react';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
    {selectedContactId ? (<div>Selected Contact View</div>) : (<ContactList setSelectedContactId={setSelectedContactId} />)}
      
    </>
  );
}

export default App;