import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import EditContact from "./EditContact";

const Contacts = () => {
  const contactsLocal = JSON.parse(localStorage.getItem("contacts")) || [];
  const [showFavorite, setShowFavorite] = useState(false);
  const [contacts, setContacts] = useState(contactsLocal);
  const [search, setSearch] = useState("");
  // const [sort, setSort] = useState("A-Z");
  const [filter, setFilter] = useState("All");
  const [contactsToSend, setContactsToSend] = useState(contacts);
  const [contactEditing, setContactEditing] = useState(null);
  const [show, setShow] = useState(false);

  const addContact = (contact) => {
    const newContacts = [
      { id: Math.floor(Math.random() * 10000000000), ...contact },
      ...contacts,
    ];
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  const deleteContact = (id) => {
    if (confirm("Are you sure you want to delete this student?")) {
      const newContacts = contacts.filter((cn) => cn.id !== id);
      setContacts(newContacts);
      localStorage.setItem("contacts", JSON.stringify(newContacts));
    }
  };

  const editContact = (contact) => {
    const newContacts = contacts.map((cn) =>
      cn.id === contact.id ? contact : cn
    );
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    setContactsToSend(newContacts);
    setShow(false);
  };

  const onEdit = (contact) => {
    setContactEditing(contact);
    setShow(true);
  };

  const searchContact = (text) => {
    const searchedContactList = contacts.filter(
      (cn) =>
        cn.firstName.trim().toLowerCase().includes(text.toLowerCase()) ||
        cn.lastName.trim().toLowerCase().includes(text.toLowerCase()) ||
        cn.email.trim().toLowerCase().includes(text.toLowerCase()) ||
        cn.age.trim().toLowerCase().includes(text.toLowerCase()) ||
        cn.phone.trim().toLowerCase().includes(text.toLowerCase())
    );
    setContactsToSend(searchedContactList);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    searchContact(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const newContacts =
      e.target.value === "All"
        ? contacts
        : contacts.filter((cn) => cn.category === e.target.value);
    setContactsToSend(newContacts);
  };

  // const handleSortChange = (e) => {
  //   setSort(e.target.value);
  //   let newContacts;
  //   if (e.target.value === "A-Z") {
  //     newContacts = contacts.sort((a, b) => {
  //       if (a.firstName < b.firstName) {
  //         return -1;
  //       }
  //       if (a.firstName > b.firstName) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   } else if (e.target.value === "Z-A") {
  //     newContacts = contacts.sort((a, b) => {
  //       if (a.firstName < b.firstName) {
  //         return 1;
  //       }
  //       if (a.firstName > b.firstName) {
  //         return -1;
  //       }
  //       return 0;
  //     });
  //   } else {
  //     newContacts = contacts;
  //   }
  //   setContactsToSend(newContacts);
  // };

  return (
    <div className="container py-3 d-flex align-items-start justify-content-between">
      <div className="w-75">
        <form className="d-flex mb-3">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search..."
            className="form-control"
            value={search}
            onChange={handleSearchChange}
          />
          <select
            name="filter"
            id="filter"
            className="form-select ms-2"
            style={{
              width: "auto",
            }}
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Frontend">Frontend</option>
            <option value="SMM">SMM</option>
            <option value="Backend">Backend</option>
            <option value="Design">Design</option>
            <option value="Other">Other</option>
          </select>
          {/* <select
            name="sort"
            id="sort"
            className="form-select"
            style={{
              width: "auto",
            }}
            value={sort}
            onChange={handleSortChange}
          >
            <option value="">Sort</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select> */}
        </form>
        <div>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => setShowFavorite(false)}
              className={`btn ${
                showFavorite ? "" : "btn-primary"
              } w-auto text-light`}
            >
              All Students({contacts.length})
            </button>
            <button
              onClick={() => setShowFavorite(true)}
              className={`btn ${
                showFavorite ? "btn-primary" : ""
              } w-auto text-light`}
            >
              Graduated({contacts.filter((cn) => cn.favorite).length})
            </button>
          </div>
          <ContactList
            contacts={
              showFavorite
                ? contactsToSend.filter((cn) => cn.favorite)
                : contactsToSend
            }
            deleteContact={deleteContact}
            onEdit={onEdit}
          />
        </div>
      </div>
      <ContactForm addContact={addContact} />
      <EditContact
        show={show}
        setShow={setShow}
        contactEditing={contactEditing}
        editContact={editContact}
      />
    </div>
  );
};

export default Contacts;
