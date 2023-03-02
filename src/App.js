import './App.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Profile from './components/profile/Profile';


function App() {
  return (
    <div className="wrapper">
      <Header />

      <NavBar />
      
      <Profile name={"Elon Musk"}/>
    </div>
  );
}

export default App;

