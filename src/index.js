import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ResultContextProvider from './context/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ResultContextProvider>
        <App />
    </ResultContextProvider>
);