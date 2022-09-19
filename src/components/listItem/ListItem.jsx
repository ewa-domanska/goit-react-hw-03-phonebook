export const ListItem = ({contact, deleteContact}) => {
  let deleteCurrentContact = () => deleteContact(contact.id);

  return (
    <li>
      {contact.name}: {contact.number} <button onClick={deleteCurrentContact}>Delete</button>
    </li>
  );
};
