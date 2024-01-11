import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const EditContact = ({ show, setShow, contactEditing, editContact }) => {
  const contactComing = contactEditing ?? {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    category: "Other",
    favorite: false,
  };

  const [data, setData] = useState(contactComing);

  useEffect(() => {
    setData(contactComing);
  }, [contactEditing]);

  return (
    <div>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="d-flex g-2 text-light">
              {/* FirstName */}
              <div
                className="mb-3 d-block mx-auto "
                style={{
                  width: " 180",
                }}
              >
                <label className="form-label" htmlFor="firstName">
                  Firstname
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                />
              </div>
              {/* LastName */}
              <div
                className="mb-3 ms-2 d-block mx-auto "
                style={{
                  width: " 180",
                }}
              >
                <label className="form-label" htmlFor="lastName">
                  Lastname
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="d-flex g-2 text-light">
              {/* Phone */}
              <div
                className="mb-3 d-block mx-auto "
                style={{
                  width: " 180",
                }}
              >
                <label className="form-label text-light" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>
              {/* Age */}
              <div
                className="mb-3 ms-2 d-block mx-auto "
                style={{
                  width: " 180",
                }}
              >
                <label className="form-label" htmlFor="phone">
                  Age
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="age"
                  name="age"
                  value={data.age}
                  onChange={(e) => setData({ ...data, age: e.target.value })}
                />
              </div>
            </div>
            {/* Email */}
            <div
              className="me-3 ms-3 d-block mx-auto text-light"
              style={{
                width: " 180",
              }}
            >
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            {/* Category */}
            <div className="me-3 ms-3 mb-3 text-light">
              <label className="form-label" htmlFor="category">
                Type
              </label>
              <select
                className="form-select"
                name="category"
                id="category"
                value={data.category}
                onChange={(e) => setData({ ...data, category: e.target.value })}
              >
                <option value="Other">Other</option>
                <option value="Frontend">Frontend</option>
                <option value="SMM">SMM</option>
                <option value="Backend">Backend</option>
                <option value="Design">Design</option>
              </select>
            </div>
            <div className="mb-3 ms-3 form-check ">
              <input
                className="form-check-input"
                type="checkbox"
                id="favorite"
                name="favorite"
                checked={data.favorite}
                onChange={(e) =>
                  setData({ ...data, favorite: e.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="favorite">
                Graduated
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editContact(data)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditContact;
