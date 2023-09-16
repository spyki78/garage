import { Contact } from "./contact";

export const Contacts = ({ contacts }: any) => {
  return (
    <div className="flex-row items-center justify-between min-h-screen">
      <div className="flex flex-col items-center ">
        {contacts.map((contact: any) => (
          <Contact
            key={contact.id}
            id={contact.id}
            object={contact.object}
            firstName={contact.firstName}
            lastName={contact.lastName}
            email={contact.email}
            phone={contact.phone}
            message={contact.message}
            isValid={contact.isValid}
          />
        ))}
      </div>
    </div>
  );
};