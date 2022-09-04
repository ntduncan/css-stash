import React, { useState } from "react";
import addIcon from "./assets/icons/add-icon.svg";
import InputForm from "./components/InputForm";
import Collection from "./pages/Collection";

const collections = {
  color: {
    collectionName: 'color',
    placeholder: '#000000',
    regexPattern: '^#?([a-f0-9A-F]{6}|[a-f0-9]{3})$',
    validatonMessage: 'Please enter a valid hex color',
    box: (name, content) => (<div className="box" style={{backgroundColor: `${name}`, color: `${name < '#808080' ? '#fff':'#555'}`}}>{content}</div>)
  },
  font: 'fonts',
  boxShadow: {
    collectionName: 'boxShadow',
    placeholder: '0 0 0 0 #000000',
    // regexPattern: '^([0-9]+px){1,4} [0-9]+px [0-9]+px [0-9]+px #?([a-f0-9A-F]{6}|[a-f0-9]{3})$',
    validatonMessage: 'Please enter a valid box shadow',
    box: (shadow) => (<div className="box" style={{ boxShadow: `${shadow}`}}></div>)
  },
}

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
      <div className="app-left">
          <select className="collection-selector" onChange={handleCollectionChange}>
            <option value="color">Color</option>
            <option value="font">Font</option>
            <option value="boxShadow">Box Shadow</option>
          </select>
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
