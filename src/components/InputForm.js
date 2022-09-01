import React, { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useFirestore } from "../hooks/useFirestore";

export default function InputForm({ toggleShowForm, collection }) {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [formError, setFormError] = useState(null);
  const { documents, error } = useCollection(collection.collectionName);
  const { addDocument, response } = useFirestore(collection.collectionName);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(true);
    setFormError(null);

    const regexPattern = new RegExp(collection.regexPattern);

    if (name.match(regexPattern)) {
      console.log(name);
      const doc = { rule: name };

      if (
        documents &&
        documents.filter((doc) => doc.rule === name).length === 0
      ) {
        addDocument({ ...doc });
      } else {
        setIsValid(false);
        setFormError("Rule already exists");
      }
    } else {
      setIsValid(false);
      console.log(isValid);
    }
  };

  const handleCancel = () => {
    toggleShowForm();
    setName("");
  };

  // if css color > #aaaaaa should have light text

  return (
    <div className="input-form">
      <h3>Create {collection.collectionName}</h3>
      <form onSubmit={handleSubmit}>
        <div className="sample-box">{collection && collection.box(name)}</div>
        {!isValid && !formError && (
          <div className="error">{collection.validatonMessage}</div>
        )}
        {formError && <div className="error">{formError}</div>}
        <input
          type="text"
          value={name}
          placeholder={collection.placeholder}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn">Add</button>
        <button className="btn btn-secondary" onClick={handleCancel}>
          cancel
        </button>
      </form>
      {/* {error && <div className="error">{error}</div>} */}
    </div>
  );
}
