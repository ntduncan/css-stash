import React, { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import NotificationBanner from "../components/NotificationBanner";

export default function Collection({ collection }) {
  const { documents, error } = useCollection("color");
  const [showBanner, setShowBanner] = useState(false);

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
    setShowBanner(true);

    setTimeout(() => {
      setShowBanner(false);
    }, 3000);
  };

  return (
    <div className="collection-grid">
      <div className="collection">
        <div className="top">
          {showBanner && (
            <NotificationBanner type="info" message="Copied to clipboard" />
          )}
        </div>
        <div className="bottom">
          {documents &&
            documents.map((doc) => (
              <button
                key={doc.id}
                className="collection-item"
                onClick={() => copyToClipboard(doc.rule)}
              >
                {collection.box(doc.rule, doc.rule)}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
