import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, addMessage } from './Data/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderTree = (props) => {
    root.render(
        <React.StrictMode>
            <App state={props.state} addPost={addPost} addMessage={addMessage} />
        </React.StrictMode>
    );
}

export default rerenderTree;