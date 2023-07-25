// #1. Create the entry point for the React application
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Update component in Step 5

// Returns "Hello, world!"
ReactDOM.render(
    //<h1>Hello, world!</h1>,
    <App />, // Update after component update, replacing the above statement
    document.getElementById('app')
);