// Import necessary modules and CSS file

import styles from "./ContactRow.module.css";

// Define the ContactRow component, accepting "setSelectedContactId" and "contact" as props
export default function ContactRow({ setSelectedContactId, contact }) {
  // Return JSX for the ContactRow component
  return (
    <tr
      className={styles.contactRow} // Apply CSS class "contactRow" from ContactRow.module.css
      onClick={() => {
        setSelectedContactId(contact.id); // Call "setSelectedContactId" with the clicked contact's ID
      }}
    >
      <td>{contact.name }</td> 
      <td>{contact.email}</td> 
      <td>{contact.phone}</td> 
    </tr>
  );
}