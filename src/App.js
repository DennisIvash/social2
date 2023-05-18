import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogues from './components/dialogues/Dialogues';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route exact path='/' element={<Profile name={'Elon Musk'} postsData={props.state.profilePage} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} onPostChange={props.onPostChange} /> } />
            <Route exact path='/profile' element={<Profile name={'Elon Musk'} postsData={props.state.profilePage} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} onPostChange={props.onPostChange} /> } />
            <Route exact path='/dialogues' element= {<Dialogues dialogueData={props.state.dialoguePage} addMessage={props.addMessage} newMessageText={props.state.dialoguePage.newMessageText} onMessageChange={props.onMessageChange} /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
