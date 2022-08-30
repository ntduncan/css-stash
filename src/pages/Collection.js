import React from 'react'
import { useCollection } from '../hooks/useCollection'

export default function Collection({ collection }) {
    const { documents, error } = useCollection('color')
    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value);
    }

  return (
    <div className="collection">
        {documents && documents.map(doc => (
            <button key={doc.id} className="collection-item" onClick={() => copyToClipboard(doc.rule)}>
                {collection.box(doc.rule, doc.rule)}
            </button>
        ))}
    </div>
  )
}
