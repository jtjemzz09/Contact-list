import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
   console.log("Selected Contact ID in SelectedContact:", selectedContactId);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
        console.log("Contact from API:", result);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedContactId) {
      fetchContact();
    } else {
      setContact(null); // Reset the contact when selectedContactId is null
    }
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Website : {contact.website}</p>
          <button onClick={() => setSelectedContactId(null)}>Back to List</button>
        </div>
      ) : (
        <div>No contact selected</div>
      )}
    </div>
  );
}