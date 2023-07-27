//// Import the necessary modules and components
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import "./App.css";

// Define the App component
function App() {
  // Initialize state for the selectedContactId using useState hook
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  // Render the App component
  return (
    // Use React fragments to wrap the JSX elements
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

// Export the App component as the default export
export default App;