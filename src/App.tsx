import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import AppNavbar from "./shared/AppNavbar.tsx";

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
