import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { React, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "../styles/home_page.css";
import "../tailwind.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { GetAllJobs } from "./services/GetAllJobs";

const HomePage = () => {
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [jobTime, setJobTime] = useState("Job Time");

  const handleJobTime = (option) => {
    setJobTime(option);
  };
  const fetchJobs = async () => {
    setJobs(demoJobs);
    setIsExpanded(false);
    // try {
    //   const response = await axios.get("/jobs");

    //   if (response.data.success) {
    //     setJobs(response.data.data);
    //   } else {
    //     console.error(response.data.message);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };
  const getFilters = async () => {
    try {
      const formData = new FormData();
      formData.append("c", companyName);
      formData.append("j", jobTitle);
      formData.append("l", filterLocation);
      formData.append("jo", jobTime);
    //   const response = await axios.post("/search/filters", formData);
    //   if (response.status === 200) {
    //     console.log(response.data);
    //     setJobs(response.data.data);
    //   } else {
    //     console.error(response.data.message);
    //   }
    } catch (e) {
      console.error(e);
    }
  };
  //   fetchJobs();

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);
  const handleSearch = (searchResults) => {
    setJobs(searchResults);
  };
  return (
    <div>
      <Navbar onSearch={handleSearch} />

      <div class="spacer"></div>
      <div class="main-body">
        <div className={`flexible-button ${isExpanded ? "expanded" : ""}`}>
          {/* <button class="btn btn-outline filter-btn" onClick={handleClick}>
            <BsFilter />
            Filter
          </button> */}
          {isExpanded && (
            <div class="btn-group btn-group-vertical lg:btn-group-horizontal filter-group-btn">
              <input
                type="text"
                placeholder="Company Name"
                class="input filter-group-btn"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Job Title"
                class="input filter-group-btn"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <input
                data-testid="inHome"
                type="text"
                placeholder="Location"
                class="input filter-group-btn"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
              />
              <div class="input-group filter-group-btn">
                <select class="select">
                  <option disabled selected>
                    Pick category
                  </option>
                  <option onClick={() => handleJobTime("Part Time")}>
                    Part Time
                  </option>
                  <option onClick={() => handleJobTime("Part Time")}>
                    Full Time
                  </option>
                </select>
              </div>
              <button
                class="btn btn-square filter-search-btn"
                onClick={getFilters}
              >
                <BsSearch
                  style={{
                    fontSize: "24px",
                    background: "none",
                    border: "none",
                  }}
                />
              </button>
            </div>
          )}
        </div>

        <GetAllJobs jobsData={jobs} getJobs={fetchJobs} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
