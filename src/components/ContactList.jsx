// Import necessary modules and CSS file
import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";
import styles from "./contactList.module.css";

// Sample data for contacts
const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

// Define the ContactList component, accepting "setSelectedContactId" as a prop
export default function ContactList({ setSelectedContactId }) {
  // Define the state "contacts" using the useState hook, initialized with the "dummyContacts" array
  const [contacts, setContacts] = useState(dummyContacts);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    async function fetchContacts() {
      try {
        // Fetch data from the API endpoint
        const response = await fetch(
          "http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        
        // Update the "contacts" state with the fetched data
        setContacts(result);
        console.log("API Response:", result);
      } catch (error) {
        console.error(error);
      }
    }

    // Call the fetchContacts function
    fetchContacts();
  }, []);

  // Return the JSX for the ContactList component
  return (
    <div className={styles.contactList}>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {/* Display the table body rows using the "contacts" state array */}
          {contacts.map((contact) => {
            // Generate a <ContactRow> component for each "contact"
            return (
              <ContactRow
                key={contact.id}
                contact={contact}
                setSelectedContactId={setSelectedContactId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
