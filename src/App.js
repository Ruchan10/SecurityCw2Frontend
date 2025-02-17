import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddJob from "./components/AddJob";
import BookmarkPage from "./components/Bookmark";
import EditProfile from "./components/Edit_profile";
import ApplicationPage from "./components/apaplications_page";
import HomePage from "./components/home_page";
import { default as LoginPage } from "./components/login_page";
import SignupPage from "./components/signup_page";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
    setLoading(false);
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/home"
            element={
              authenticated ? (
                <HomePage />
              ) : (
                  <HomePage />
              )
            }
          />
          <Route
            path="/application"
            element={
              authenticated ? (
                <ApplicationPage />
              ) : (
                  <ApplicationPage />
              )
            }
          />
          <Route
            path="/bookmark"
            element={
              authenticated ? (
                <BookmarkPage />
              ) : (
                  <BookmarkPage />
              )
            }
          />
          <Route
            path="/addjob"
            element={
              authenticated ? (
                <AddJob />
              ) : (
                  <AddJob />
              )
            }
          />
          <Route
            path="/editProfile"
            element={
              authenticated ? (
                <EditProfile />
              ) : (
                  <EditProfile />
              )
            }
          />
        <Route path="*" element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;

