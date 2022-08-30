import React, { useState } from "react";
import addIcon from "./assets/icons/add-icon.svg";
import InputForm from "./components/InputForm";
import Collection from "./pages/Collection";

function App({ collection }) {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <div className="app-left">
        {!showForm && <img src={addIcon} alt="Add" onClick={toggleShowForm} />}
        {showForm && (
          <InputForm toggleShowForm={toggleShowForm} collection={collection} />
        )}
      </div>
      <div className="app-right">
        <header>
          <h1>CSS Stash</h1>
        </header>
        <Collection collection={collection} />
      </div>
    </div>
  );
}

export default App;
