import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const collections = {
  color: {
    collectionName: 'color',
    placeholder: '#000000',
    regexPattern: '^#?([a-f0-9]{6}|[a-f0-9]{3})$',
    validatonMessage: 'Please enter a valid hex color',
    box: (name, content) => (<div className="box" style={{backgroundColor: `${name}`}}>{content}</div>)
  },
  font: 'fonts',
  boxShadow: 'boxShadows',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App collection={collections.color}/>
    <footer>
      <p>&copy;{new Date().getFullYear()}</p>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
