import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AppNavbar from "./shared/AppNavbar.jsx";

function App() {

  return (
    <>
        <AppNavbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>
    </>
  )
}

export default App
