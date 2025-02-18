import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { React, useEffect, useState } from "react";
import "../styles/application.css";
import "../tailwind.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { GetAppliedJobs, GetCreatedJobs } from "./services/GetAllJobs";

const ApplicationPage = () => {

    const demoJobs = [
        {
          "_id": "job1",
          "logo": "https://fs.blabigo.com/s/wlUl2Ycz",
          "company": "TechCorp",
          "title": "Frontend Developer",
          "location": "San Francisco, CA",
          "jobTime": "Full-Time",
          "salary": "$80,000 - $100,000",
          "desc": "Looking for an experienced frontend developer proficient in React and Tailwind CSS.",
          "bookmarkedBy": ["default"],
          "appliedBy": ["default"],
          "createdBy": "admin"
        },
        {
          "_id": "job2",
          "logo": "https://fs.blabigo.com/s/nqzy898B",
          "company": "InnovateX",
          "title": "Backend Engineer",
          "location": "New York, NY",
          "jobTime": "Part-Time",
          "salary": "$60,000 - $80,000",
          "desc": "Seeking a backend engineer with expertise in Node.js and MongoDB.",
          "bookmarkedBy": [],
          "appliedBy": ["default"],
          "createdBy": "admin"
        },
        {
          "_id": "job6",
          "logo": "https://fs.blabigo.com/s/5Uei6n17",
          "company": "CloudNet",
          "title": "Cloud Engineer",
          "location": "Seattle, WA",
          "jobTime": "Remote",
          "salary": "$100,000 - $130,000",
          "desc": "Seeking a cloud engineer with experience in AWS and Kubernetes.",
          "bookmarkedBy": [],
          "appliedBy": ["default"],
          "createdBy": "admin"
        },
        {
          "_id": "job8",
          "logo": "https://www.urlshortner.co/bu",
          "company": "FinTechPro",
          "title": "DevOps Engineer",
          "location": "Chicago, IL",
          "jobTime": "Part-Time",
          "salary": "$90,000 - $115,000",
          "desc": "Looking for a DevOps engineer skilled in Docker and CI/CD pipelines.",
          "bookmarkedBy": [],
          "appliedBy": ["default"],
          "createdBy": "default"
        },
        {
          "_id": "job9",
          "logo": "https://www.urlshortner.co/bv",
          "company": "EduTech",
          "title": "Software Engineer",
          "location": "Remote",
          "jobTime": "Contract",
          "salary": "$75,000 - $95,000",
          "desc": "Hiring a software engineer with experience in Java and Spring Boot.",
          "bookmarkedBy": ["default"],
          "appliedBy": ["default"],
          "createdBy": "admin"
        },
        {
          "_id": "job12",
          "logo": "https://www.urlshortner.co/by",
          "company": "RetailTech",
          "title": "E-commerce Specialist",
          "location": "Miami, FL",
          "jobTime": "Part-Time",
          "salary": "$50,000 - $70,000",
          "desc": "Looking for an e-commerce specialist with Shopify experience.",
          "bookmarkedBy": [],
          "appliedBy": ["default"],
          "createdBy": "admin"
        },
        {
          "_id": "job15",
          "logo": "https://www.urlshortner.co/bB",
          "company": "AI Research",
          "title": "AI Research Scientist",
          "location": "Boston, MA",
          "jobTime": "Full-Time",
          "salary": "$120,000 - $160,000",
          "desc": "Looking for an AI researcher with deep learning expertise.",
          "bookmarkedBy": ["default"],
          "appliedBy": ["default"],
          "createdBy": "admin"
        }
      ];
      const applicantsJobs = [
        {
          "_id": "job4",
          "logo": "https://fs.blabigo.com/s/iNBEH8la",
          "company": "CodeMaster",
          "title": "Full Stack Developer",
          "location": "Los Angeles, CA",
          "jobTime": "Full-Time",
          "salary": "$100,000 - $130,000",
          "desc": "Looking for a full stack developer proficient in React, Node.js, and PostgreSQL.",
          "bookmarkedBy": [],
          "appliedBy": [],
          "createdBy": "default"
        },
        {
          "_id": "job10",
          "logo": "https://www.urlshortner.co/bw",
          "company": "HealthTech",
          "title": "Mobile App Developer",
          "location": "San Diego, CA",
          "jobTime": "Full-Time",
          "salary": "$85,000 - $110,000",
          "desc": "Hiring a Flutter developer to build health applications.",
          "bookmarkedBy": [],
          "appliedBy": [],
          "createdBy": "default"
        },
        {
          "_id": "job14",
          "logo": "https://www.urlshortner.co/bA",
          "company": "GameDev Studios",
          "title": "Game Developer",
          "location": "Los Angeles, CA",
          "jobTime": "Full-Time",
          "salary": "$80,000 - $110,000",
          "desc": "Hiring a Unity developer for VR game projects.",
          "bookmarkedBy": [],
          "appliedBy": [],
          "createdBy": "default"
        }
      ];
  const [activeTab, setActiveTab] = useState("applied");
  const [appliedJobs, setAppliedJobs] = useState(demoJobs);
  const [createdJobs, setCreatedJobs] = useState(applicantsJobs);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const fetchJobs = async () => {
    setAppliedJobs(demoJobs);
    setCreatedJobs(applicantsJobs);
  };
  const getAppliedJobs = async () => {
  };


  const getCreatedJobs = async () => {
    try {
      // Get the access token from your authentication system

    //   const userId = jwtDecode(accessToken).userId;
    //   if (!accessToken) {
    //     // If the access token is not available, handle the authentication error
    //     console.error("User not authenticated.");
    //     return;
    //   }

      // Set the Authorization header with the access token
  

    //   const response = await axios.get(`/jobs/user/${userId}`, { headers });
    //   // Save the URL of the uploaded logo in the state
    //   setLogoUrl(response.data.data[0].logo);
    //   if (response.data.success) {
    //     setCreatedJobs(response.data.data);
    //     setApplicants(response.data.data.appliedBy);
    //   } else {
    //     console.error(response.data.message);
    //   }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAppliedJobs();
    fetchJobs();
  }, );
  return (
    <div>
      <Navbar />
      <div class="tabs">
        <button
          className={`tab tab-lifted ${
            activeTab === "applied" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("applied")}
          tabIndex="0"
        >
          Applied
        </button>
        <button
          className={`tab tab-lifted ${
            activeTab === "received" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("received")}
          tabIndex="1"
        >
          Received
        </button>
      </div>
      {activeTab === "applied" && (
        <GetAppliedJobs
          appliedJobsData={appliedJobs}
          getAppliedJobs={getAppliedJobs}
          getJobs={fetchJobs}
        />
      )}
      {activeTab === "received" && (
        <GetCreatedJobs
          createdJobsData={createdJobs}
          getCreatedJobs={getCreatedJobs}
          getJobs={fetchJobs}

        />
      )}

      <Footer />
    </div>
  );
};

export default ApplicationPage;
