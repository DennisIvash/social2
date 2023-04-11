import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Conversations from './components/conversations/Conversations';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter >
        <Header />

        <NavBar />

        {/* <Profile name={"Elon Musk"} /> */}

        <div className="wrapper-content">
          <Routes>
            <Route exact path="/" element={ <Profile />} />
            <Route exact path="/profile" element={ <Profile />} />
            <Route exact path="/conversations" element={ <Conversations />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;

