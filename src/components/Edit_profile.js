import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "../styles/edit_profile.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function EditProfile() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const fileInputRef = useRef("");
  const [seeProfile, setAvatarImage] = useState(null);
  const [profile, setProfile] = useState(null);

  const demoProfile = {
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1234567890",
    avatar: "https://tinyurl.com/b5hdyjkj",
    cv: "demo_cv.pdf", 
  };
  
  const getUserProfile = async () => {
    try {
      email("johndoe@example.com");
    //   const response = await axios.get(`/users/profile/${userId}`, {
    //     headers,
    //   });
    //   console.log(response.data.data.cv);
    //   if (response.status === 200) {
        setFullName(demoProfile.fullName);
        setEmail(demoProfile.email);
        setNum(demoProfile.phoneNumber);
        setAvatarImage(demoProfile.avatar);
        setCvFile(demoProfile.cv);
    //   } else {
    //     message.error(response.data.message);
    //   }
    } catch (e) {
      console.error(e);
    }
  };
  const handleEditProfile = async () => {
    if (!fullName || !num) {
      message.error("Fields cannot be left empty");
      return;
    }
    const formData = new FormData();
    formData.append("fullName", fullName);
    // formData.append("email", email);
    formData.append("phoneNumber", num);
    formData.append("cv", cvFile);
    formData.append("profile", profile);

    // const headers = {
    //   Authorization: `${accessToken}`,
    //   "Content-Type": "multipart/form-data",
    // };
    // try {
    //   const response = await axios.post("/users/editProfile", formData, {
    //     headers,
    //   });
    //   console.log(response);
    //   if (response.status === 200) {
    //     navigate("/home");
    //     message.success(response.data.message);
    //   } else {
    //     message.error(response.data.message);
    //   }
    // } catch (error) {
    //   message.error(error.message);
    // }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };
  useEffect(() => {
    getUserProfile();
  }, );
  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col min-h-screen"
        style={{
          padding: "20px",
        }}
      >
        <div
          class="text-4xl font-bold"
          style={{ marginBottom: "50px", marginTop: "-10px" }}
        >
          Edit Profile
        </div>
        <div style={{ padding: "20px" }}>
          <p
            className="mt-1 text-sm leading-6 text-gray-600"
            style={{ marginBottom: "20px" }}
          >
            This information will be displayed publicly so be careful what you
            share.
          </p>

          {/* <div class="avatar pp">
            <div class="w-32 rounded-full">
              <button onClick={handleAvatarClick}>
                <img src={seeProfile} alt="Profile" />
              </button>
            </div>
          </div> */}
          <input
            type="file"
            class="file-input file-input-bordered file-input-success w-full max-w-xs"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <label
            tabindex="0"
            class="w-40 btn h-40 btn-ghost btn-circle avatar pp"
            onClick={handleAvatarClick}
          >
            <div class="rounded-full w-96">
              <img src={seeProfile} alt="pp" />
            </div>
          </label>
          <div
            className=" flex flex-row"
            style={{ marginBottom: "20px", marginTop: "-20px" }}
          >
            <div
              className="flex  mt-4 w-full max-w-xs"
              style={{ marginRight: "60px" }}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered input-accent w-full"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div
            className="mt-4 w-full max-w-xs"
            style={{ marginBottom: "15px" }}
          >
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-accent w-full"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <div className="flex flex=col" style={{ marginBottom: "20px" }}>
            <div class="text-2xl" style={{ marginRight: "20px" }}>
              CV
            </div>
            <input
              name="cv"
              type="file"
              class="file-input file-input-bordered file-input-success w-72"
              onChange={handleFileChange}
            />
          </div>
          <p
            className="mt-1 text-sm leading-6 text-gray-600"
            style={{ marginBottom: "20px" }}
          >
            Your CV will be sent to employer when you apply for a job.
          </p>
        </div>
        <button
          style={{ marginTop: "30px" }}
          class="btn btn-primary h-10 w-60 rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleEditProfile}
        >
          Update Profile
        </button>
      </div>
      <Footer />
    </div>
  );
}
