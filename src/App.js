import React, { useState } from "react";
import addIcon from "./assets/icons/add-icon.svg";
import InputForm from "./components/InputForm";
import Collection from "./pages/Collection";
import SideNav from "./components/SideNav";

const collections = {
  color: {
    collectionName: "color",
    placeholder: "#000000",
    regexPattern: "^#?([a-f0-9A-F]{6}|[a-f0-9]{3})$",
    validatonMessage: "Please enter a valid hex color",
    box: (name, content) => (
      <div
        className="box"
        style={{
          backgroundColor: `${name}`,
          color: `${
            name.match(new RegExp("[0-9]{6}|[0-9]{3}")) ? "#fff" : "#555"
          }`,
        }}
      >
        {content}
      </div>
    ),
  },
  fonts: {
    collectionName: "fonts",
    placeholder: "Arial",
    // regexPattern: "^[a-zA-Z0-9 ]+$",
    // validatonMessage: "Please enter a valid font name",
    box: (name, content) => (
      <div>
        <div
          className="box font-box"
          style={{
            fontFamily: `${name}`,
            color: "#555",
          }}
        >
          Sample of {name}
        </div>
      </div>
    ),
  },
  boxShadow: {
    collectionName: "boxShadow",
    placeholder: "0 0 0 0 #000000",
    // regexPattern: '^([0-9]+px){1,4} [0-9]+px [0-9]+px [0-9]+px #?([a-f0-9A-F]{6}|[a-f0-9]{3})$',
    validatonMessage: "Please enter a valid box shadow",
    box: (shadow) => (
      <div className="box" style={{ boxShadow: `${shadow}` }}></div>
    ),
  },
};

function App() {
  const [showForm, setShowForm] = useState(false);
  const [collection, setCollection] = useState(collections.color);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleCollectionChange = (e) => {
    setCollection(collections[e.target.value]);
  };

  return (
    <div className="App">
      <header>
        <h1>CSS Stash</h1>
      </header>
      <main>
        {!showForm && (
          <img src={addIcon} alt="Add" onClick={toggleShowForm} width="50" />
        )}
        {showForm && (
          <InputForm toggleShowForm={toggleShowForm} collection={collection} />
        )}
        <Collection collection={collection} />
        <SideNav collections={collections} setCollection={setCollection} />
      </main>
      <footer>
        <p>&copy;{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
