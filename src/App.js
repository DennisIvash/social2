import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogues from './components/dialogues/Dialogues';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  console.log(props);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route exact path='/' element={
              <Profile
                name={'Elon Musk'}
                postsData={props.state.profilePage}
                newPostText={props.state.profilePage.newPostText}
                dispatch={props.dispatch} />} />
            <Route exact path='/profile' element={
              <Profile
                name={'Elon Musk'}
                postsData={props.state.profilePage}
                dispatch={props.dispatch}
                newPostText={props.state.profilePage.newPostText} />} />
            <Route exact path='/dialogues' element={
              <Dialogues
                dialogueData={props.state.dialoguePage}
                newMessageText={props.state.dialoguePage.newMessageText}
                dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
