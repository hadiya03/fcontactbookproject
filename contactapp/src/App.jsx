import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Add from './components/Add';
import View from './components/View';
import AboutUs from './components/Aboutus';
import BirthdayReminder from './components/BirthdayReminder';
import Message from './components/Message';
import Addcon from './components/Addcon';
import Logout from './components/Logout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [birthdayData, setBirthdayData] = useState([]);

  const addBirthday = (newBirthday) => {
    setBirthdayData((prevData) => [...prevData, newBirthday]);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/s" element={<Signup />} />
        <Route path="/Ab" element={<AboutUs />} />

        {/* Private Routes */}
        {isLoggedIn ? (
          <>
            <Route path="/a" element={<Add addBirthday={addBirthday} />} />
            <Route path="/v" element={<View />} />
            <Route path="/Birthdays" element={<BirthdayReminder birthdayData={birthdayData} />} />
            <Route path="/Message" element={<Message />} />
            <Route path="/add" element={<Addcon />} />
            <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          </>
        ) : (
          <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
        )}
      </Routes>
    </>
  );
}

export default App;
