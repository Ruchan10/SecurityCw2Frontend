import { React, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { GetBookmarked } from "./services/GetAllJobs";

export default function BookmarkPage() {
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
          "_id": "job3",
          "logo": "https://fs.blabigo.com/s/opgwHpgL",
          "company": "DataWorks",
          "title": "Data Scientist",
          "location": "Remote",
          "jobTime": "Contract",
          "salary": "$90,000 - $120,000",
          "desc": "Hiring a data scientist with experience in machine learning and Python.",
          "bookmarkedBy": ["default"],
          "appliedBy": [],
          "createdBy": "admin"
        },
        {
          "_id": "job5",
          "logo": "https://fs.blabigo.com/s/Cygz9ONd",
          "company": "AI Solutions",
          "title": "Machine Learning Engineer",
          "location": "Boston, MA",
          "jobTime": "Full-Time",
          "salary": "$110,000 - $140,000",
          "desc": "Hiring an ML engineer with expertise in TensorFlow and PyTorch.",
          "bookmarkedBy": ["default"],
          "appliedBy": [],
          "createdBy": "admin"
        },
        {
          "_id": "job7",
          "logo": "https://fs.blabigo.com/s/F5s9f3aK",
          "company": "CyberTech",
          "title": "Cybersecurity Analyst",
          "location": "Austin, TX",
          "jobTime": "Full-Time",
          "salary": "$85,000 - $110,000",
          "desc": "Hiring a cybersecurity analyst to strengthen security protocols.",
          "bookmarkedBy": ["default"],
          "appliedBy": [],
          "createdBy": "admin"
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
          "_id": "job11",
          "logo": "https://www.urlshortner.co/bx",
          "company": "GreenEnergy",
          "title": "Solar Engineer",
          "location": "Denver, CO",
          "jobTime": "Full-Time",
          "salary": "$70,000 - $90,000",
          "desc": "Hiring a solar engineer for renewable energy projects.",
          "bookmarkedBy": ["default"],
          "appliedBy": [],
          "createdBy": "admin"
        },
        {
          "_id": "job13",
          "logo": "https://www.urlshortner.co/bz",
          "company": "BankingX",
          "title": "Financial Analyst",
          "location": "Charlotte, NC",
          "jobTime": "Full-Time",
          "salary": "$90,000 - $110,000",
          "desc": "Seeking a financial analyst with experience in investment banking.",
          "bookmarkedBy": ["default"],
          "appliedBy": [],
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
  const [bookmarks, setBookmarks] = useState(demoJobs);
  const getBookmarks = async () => {
    setBookmarks(demoJobs);
    // try {
    //   const accessToken = localStorage.getItem("token"); 
    // //   if (!accessToken) {
    // //     // If the access token is not available, handle the authentication error
    // //     console.error("User not authenticated.");
    // //     return;
    // //   }

    //   const headers = {
    //     Authorization: `${accessToken}`,
    //   };

    //   const response = await axios.get("/jobs/getBookmarked", { headers });
    //   if (response.data.success) {
    //     setBookmarks(response.data.data);
    //   } else {
    //     console.error(response.data.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    getBookmarks();
  }, );

  return (
    <div>
      <Navbar />
      <GetBookmarked bookmarkData={bookmarks} getBookmarks={getBookmarks} />
      <Footer />
    </div>
  );
}
