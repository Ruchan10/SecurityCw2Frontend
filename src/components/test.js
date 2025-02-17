import React, { useEffect, useState } from "react";
import { message } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { IoBriefcaseOutline, IoDocumentsOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import "../tailwind.css";

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);
  const [profileImage, setProfileImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [notis, setNotis] = useState([]);  // notifications state

  const handleButtonClick = (path) => {
    setActiveButton(path);
  };

  const isButtonActive = (path) => {
    return activeButton === path;
  };

  // Demo notifications
  const demoNotifications = [
    "Your job application has been reviewed.",
    "New job posted that matches your profile.",
    "You have a new message from an employer.",
    "A job you bookmarked has been updated."
  ];

  const renderNotifications = () => {
    if (notis.length === 0) {
      return (
        <li>
          <a>No notifications</a>
        </li>
      );
    } else {
      return notis.map((notification, index) => (
        <li key={index}>
          <a>{notification}</a>
        </li>
      ));
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Adding demo notifications to the state
    setNotis(demoNotifications);
  }, []);

  return (
    <div>
      <div className={`navbar bg-neutral ${menuOpen ? "menu-open" : ""}`}>
        <div className="navbar-start">
          <div className="menu-dropdown" onClick={toggleMenu}>
            <div className="dropdown-icon"></div>
            {menuOpen && (
              <div className="dropdown-content">
                <Link to="/home" onClick={() => handleButtonClick("/home")}>
                  Home
                </Link>
              </div>
            )}
          </div>
          <div
            className={`tabs-boxed bg-neutral ${
              menuOpen ? "menu-open" : "menu-closed"
            }`}
          >
            <Link to="/home">
              <div
                className={`tab ${isButtonActive("/home") ? "tab-active" : ""}`}
                onClick={() => handleButtonClick("/home")}
              >
                <AiOutlineHome className="tab-icon" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/bookmark">
              <div
                className={`tab ${
                  isButtonActive("/bookmark") ? "tab-active" : ""
                }`}
                onClick={() => handleButtonClick("/bookmark")}
              >
                <BsBookmark className="tab-icon" />
                <span>Bookmark</span>
              </div>
            </Link>
            <Link to="/application">
              <div
                className={`tab ${
                  isButtonActive("/application") ? "tab-active" : ""
                }`}
                onClick={() => handleButtonClick("/application")}
              >
                <IoDocumentsOutline className="tab-icon" />
                <span>Applications</span>
              </div>
            </Link>
            <Link to="/addjob">
              <div
                className={`tab ${
                  isButtonActive("/addjob") ? "tab-active" : ""
                }`}
                onClick={() => handleButtonClick("/addjob")}
              >
                <IoBriefcaseOutline className="tab-icon" />
                <span> Add Job</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <div className="text-3xl font-bold">The Job Finder</div>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            data-testid="searchBtn"
            className="btn btn-ghost"
            onClick={() => {}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <ul
              tabindex="0"
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {/* Render notifications */}
              {renderNotifications()}
            </ul>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Navbar;
