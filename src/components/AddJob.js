import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AddJob() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [jobTime, setJobTime] = useState("Job Time");
  const [logo, setLogo] = useState(null);

  const handleJobTime = (option) => {
    setJobTime(option);
  };
  const navigate = useNavigate();

  const handleAddJob = async () => {
    if (!name || !title || !desc || !salary) {
      message.error("Fields cannot be left empty");
      return;
    }
    if (jobTime === "Job Time") {
      message.error("Please select job time");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("company", name);
    formData.append("salary", salary);
    formData.append("jobTime", jobTime);
    formData.append("location", location);
    formData.append("logo", logo);
    navigate(-1);
    message.success("Job Added Successfully");
    // try {
    //   const response = await axios.post("/jobs/", formData, { headers });
    //   if (response.status === 201) {
    //     navigate(-1);
    //     message.success(response.data.message);
    //   } else {
    //     message.error(response.data.message);
    //   }
    // } catch (error) {
    //   message.error(error.message);
    // }
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  const getCreatedJobs = async () => {
    try {
    //   const userId = jwtDecode(accessToken).userId;
    //   if (!accessToken) {
    //     // If the access token is not available, handle the authentication error
    //     console.error("User not authenticated.");
    //     return;
    //   }

  

    //   const response = await axios.get(`/jobs/user/${userId}`, { headers });
    //   setLogoUrl(response.data.data[0].logo);
    //   if (response.data.success) {
    //     setCreatedJobs(response.data.data);
    //   } else {
    //     console.error(response.data.message);
    //   }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCreatedJobs();
  }, );
  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{
          padding: "30px",
        }}
      >
        <div class="text-4xl font-bold" style={{ marginBottom: "50px" }}>
          Add Job
        </div>
        <div style={{ padding: "20px" }}>
          <p
            className="mt-1 text-sm leading-6 text-gray-600"
            style={{ marginBottom: "20px" }}
          >
            This information will be displayed publicly so be careful what you
            share.
          </p>
          <div className=" flex flex-row" style={{ marginBottom: "20px" }}>
            <div
              className="flex  mt-4 w-full max-w-xs"
              style={{ marginRight: "60px" }}
            >
              <input
                data-testid="cn"
                type="text"
                placeholder="Company Name"
                className="input input-bordered input-accent w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex  mt-4 w-full max-w-xs">
              <input
                type="text"
                placeholder="Job Title"
                className="input input-bordered input-accent w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <textarea
            placeholder="Write qualifications and job description"
            class="textarea textarea-bordered"
            rows={6}
            cols={80}
            style={{ marginBottom: "20px" }}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="flex flex=col" style={{ marginBottom: "20px" }}>
            <div class="text-2xl" style={{ marginRight: "20px" }}>
              Company Logo
            </div>
            <input
            data-testid="fileHandle"
              type="file"
              class="file-input file-input-bordered file-input-success w-full max-w-xs"
              onChange={handleFileChange}
            />
          </div>

          <div class="dropdown dropdown-right" style={{ marginBottom: "20px" }}>
            <label tabindex="0" class="btn m-1">
              {jobTime}
            </label>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => handleJobTime("Part Time")}>Part Time</button>
              </li>
              <li>
                <button onClick={() => handleJobTime("Full Time")}>Full Time</button>
              </li>
            </ul>
          </div>

          <div className="mt-4 w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Salary, Eg:- $1000/yr"
              className="input input-bordered input-accent w-full"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className="mt-4 w-full max-w-xs">
            <input
              type="text"
              placeholder=" Enter job work location"
              className="input input-bordered input-accent w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <button
          style={{ marginTop: "30px" }}
          class="btn btn-primary h-10 w-60 rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          onClick={handleAddJob}
        >
          Add Job
        </button>
        <div
          class="text-4xl font-bold"
          style={{ marginTop: "90px", marginBottom: "-25px" }}
        ></div>
      </div>
      <Footer />
    </div>
  );
}
