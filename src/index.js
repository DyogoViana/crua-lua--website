import React from 'react';
import ReactDOM from 'react-dom/client';

import ResetCSS from './generic/resetCSS';
import Base from './styles/elements/Base';

import Header from './components/Header/header'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetCSS />
    <Base />
	 <Header />
    <App />
  </React.StrictMode>
);
