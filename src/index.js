import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals'; 
import state from './Data/state';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, addMessage, onPostChange, onMessageChange, subscribe } from './Data/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} onPostChange={onPostChange}  onMessageChange={onMessageChange} />
        </React.StrictMode>
    );
}

rerenderTree(state)
subscribe(rerenderTree)
// export default rerenderTree;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
