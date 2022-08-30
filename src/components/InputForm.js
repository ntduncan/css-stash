import React, { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useFirestore } from "../hooks/useFirestore";

export default function InputForm({ toggleShowForm, collection }) {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [formError, setFormError] = useState(null);
//   const { documents, error } = useCollection(collection);
//   const { addDocument, response } = useFirestore(collection.collectionName);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(true);
    setFormError(null);

    const regexPattern = new RegExp(collection.regexPattern);

    if (name.match(regexPattern)) {
      console.log(name);
      const doc = { rule: name };
    //   if (documents && documents.indexOf(doc) === -1) {
        // addDocument({ ...doc });
    //   } else {
    //     setIsValid(false);
    //     setFormError("Rule already exists");
    //   }
    } else {
      setIsValid(false);
      console.log(isValid);
    }
  };

  const handleCancel = () => {
    toggleShowForm();
    setName("");
  };

  return (
    <div className="input-form">
      <h3>Create {collection.collectionName}</h3>
      <form onSubmit={handleSubmit}>
        {collection && collection.box(name)}
        {!isValid && <div className="error">{collection.validatonMessage}</div>}
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
