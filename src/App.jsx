import React from "react";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div className="vh-100 bg-secondary">
      <h1 className="container p-2 text-light rounded">
        List of students 🧑‍🎓 👩‍🎓
      </h1>
      <Contacts />
    </div>
  );
};

export default App;
