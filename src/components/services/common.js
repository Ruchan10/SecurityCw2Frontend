import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../../styles/card.css";
import "../../styles/signup_page.css";

export function getIcons() {
  return (
    <div className="signup-social-logos">
      <BsGoogle
        data-testid="google-icon"
        style={{ fontSize: "30px", "padding-right": "10px" }}
      />
      <BsApple
        data-testid="apple-icon"
        style={{ fontSize: "30px", "padding-right": "10px" }}
      />
      <BsFacebook
        data-testid="facebook-icon"
        style={{ fontSize: "30px", "padding-right": "10px" }}
      />
    </div>
  );
}

export function GetUserPill({
  jobId,
  userId,
  title,
  applicants,
}) {
  const [applicant] = useState({
    fullName: "Jane Doe",
    email: "janedoe@example.com",
    phoneNumber: "+1234567890",
    profile: "https://tinyurl.com/c4d4ze28", 
    cv: "http://tiny.cc/w61a001" 
  });



//   const getUserDetails = async (userId) => {
//     const applicantData = demoApplicants.find(app => app.userId === userId);
//     setApplicant(applicantData || {});
//   };

  const rejectUser = async (jobId, userId) => {
    // Replace with actual reject API
    console.log(`Rejecting user ${userId} for job ${jobId}`);
    message.success("User Rejected");
  };

  const handleAddNoti = async (jobTitle, userId) => {
    console.log(`Notification: ${userId} has been accepted for job ${jobTitle}`);
  };

  const acceptUser = async (jobId, userId, title) => {
    console.log(`Accepting user ${userId} for job ${jobId}`);
    message.success("User Accepted");
    handleAddNoti(title, userId);
  };

  const downloadCV = async () => {
    try {
      const response = await axios.get(applicant.cv, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${applicant.fullName}_cv.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  };

//   useEffect(() => {
//     getUserDetails(userId); // Set demo user data when the component mounts
//   }, [getUserDetails, userId]);

  if (!applicants.appliedJobs.includes(jobId)) {
    return null; // If the user hasn't applied to the job, don't render
  }

  return (
    <div className="spacer card w-96 bg-primary text-primary-content" style={{ padding: 10 }}>
      <div className="card-header">
        <img src={applicant.profile} alt="Profile" className="logo" />
        <h1 className="card-title">{title}</h1>
      </div>
      <div className="card-body">
        <h3 className="card-title text-xl font">{applicant.fullName}</h3>
        <h3 className="card-title text-xl font">{applicant.email}</h3>
        <h3 className="card-title text-xl font">{applicant.phoneNumber}</h3>
        <div className="card-actions justify-end">
          <button onClick={() => rejectUser(jobId, applicant.userId)} className="btn btn-sm">
            <AiOutlineDelete />
          </button>
          <button className="btn btn-sm" onClick={() => downloadCV()}>
            Download CV
          </button>
          <button className="btn btn-sm" onClick={() => acceptUser(jobId, applicant.userId, title)}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
