// import React from "react";

// const ContactList = ({ contacts, deleteContact, onEdit }) => {
//   return (
//     <div className="py-3">
//       {contacts.map((contact) => (
//         <div
//           className="card p-2 mb-2 d-flex flex-row align-items-center justify-content-between"
//           key={contact.id}
//         >
//           <div>
//             <h3>
//               {contact.firstName} {contact.lastName}
//             </h3>
//             <p>{contact.phone}</p>
//           </div>
//           <div className="d-flex gap-2">
//             {/* <button className="btn btn-sm">❤️</button> */}
//             <button
//               onClick={() => onEdit(contact)}
//               className="btn btn-sm btn-primary"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => deleteContact(contact.id)}
//               className="btn btn-sm btn-danger"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ContactList;
import React from "react";

import Table from "react-bootstrap/Table";

const ContactList = ({ contacts, deleteContact, onEdit }) => {
  return (
    <div className="py-3">
      {contacts.map((contact) => (
        // <div
        //   className="card p-2 mb-2 d-flex flex-row align-items-center justify-content-between"
        //   key={contact.id}
        // >
        //   <div>
        //     <h3>
        //       {contact.firstName} {contact.lastName}
        //     </h3>
        //     <p>{contact.phone}</p>
        //   </div>
        //   <div className="d-flex gap-2">
        //     {/* <button className="btn btn-sm">❤️</button> */}
        //     <button
        //       onClick={() => onEdit(contact)}
        //       className="btn btn-sm btn-primary"
        //     >
        //       Edit
        //     </button>
        //     <button
        //       onClick={() => deleteContact(contact.id)}
        //       className="btn btn-sm btn-danger"
        //     >
        //       Delete
        //     </button>
        //   </div>
        // </div>
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=""> key={contact.id}</td>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.age}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      onClick={() => onEdit(contact)}
                      className="btn btn-sm btn-primary"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      ))}
    </div>
  );
};

export default ContactList;
