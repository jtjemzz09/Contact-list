import React, { useState, useEffect } from "react";
import styles from "./SelectedContact.module.css";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  // Initialize state for the contact data
  const [contact, setContact] = useState(null);

  // Define the effect to run when selectedContactId changes
  useEffect(() => {
    // Declare an async function to fetch contact data from the API
    async function fetchContact() {
      try {
        // Make an API request using the selectedContactId
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        // Update the contact state with the fetched data
        setContact(result);
        console.log("Contact from API:", result);
      } catch (error) {
        // Log any errors that occur during the API request
        console.error(error);
      }
    }

    // Check if selectedContactId is not null
    if (selectedContactId) {
      // Call the fetchContact function to fetch contact data
      fetchContact();
    } else {
      // Reset the contact state to null when selectedContactId is null
      setContact(null);
    }
  }, [selectedContactId]);

  // Render the SelectedContact component
  return (
    // Apply the CSS class "selectedContact" from SelectedContact.module.css
    <div className={styles.selectedContact}>
      {contact ? (
        // Check if contact data is available
        <div>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Website: {contact.website}</p>
          <button onClick={() => setSelectedContactId(null)}>Back to List</button>
        </div>
      ) : (
        // Display a message if no contact data is available
        <div>No contact selected</div>
      )}
    </div>
  );
}