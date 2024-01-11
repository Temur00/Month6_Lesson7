import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    category: "Other",
    favorite: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addContact(data);
    setData({
      firstName: "",
      lastName: "",
      phone: "",
      age: "",
      email: "",
      category: "Other",
      favorite: false,
    });
  };

  return (
    <div className=" bg-secondary border border-black-subtle rounded-2 ms-5 p-3">
      <form onSubmit={onSubmit}>
        <div className=" g-2 text-light">
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
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
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
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </div>
        </div>
        <div className=" g-2 text-light">
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
          className="mb-3 d-block mx-auto text-light"
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
        <div className="mb-3 text-light">
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
        <div className="mb-3 form-check text-light">
          <input
            className="form-check-input"
            type="checkbox"
            id="favorite"
            name="favorite"
            checked={data.favorite}
            onChange={(e) => setData({ ...data, favorite: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="favorite">
            Graduated
          </label>
        </div>
        <button className="btn btn-primary btn-block w-100">Add student</button>
      </form>
    </div>
  );
};

export default ContactForm;
