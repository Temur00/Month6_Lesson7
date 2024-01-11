import React from "react";
import Students from "./components/Students";

const App = () => {
  return (
    <div className="vh-100 bg-secondary">
      <h1 className="container p-2 text-light rounded">
        List of students 🧑‍🎓 👩‍🎓
      </h1>
      <Students />
    </div>
  );
};

export default App;
