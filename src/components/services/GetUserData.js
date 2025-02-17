import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineDownload } from "react-icons/ai";
import { GetUserPill } from "./common";

const getCv = async () => {};
const acceptUser = async () => {};

export function GetUserData({ jobId, jobName }) {
  const [applicants, setApplicants] = useState(demoApplicants); // State to store the applicants
  const demoApplicants = [
    {
      userId: "1",
      applicant: {
        fullName: "John Doe",
        email: "john@example.com",
        phoneNumber: "123-456-7890",
        cv: "/path/to/john_cv.pdf",
      },
    },
    {
      userId: "2",
      applicant: {
        fullName: "Jane Smith",
        email: "jane@example.com",
        phoneNumber: "987-654-3210",
        cv: "/path/to/jane_cv.pdf",
      },
    },
  ];
  var userResponse = useState([]);
  const getJobsById = async (jobId) => {
    setApplicants([]);

    // try {
    //   const response = await axios.get(`/jobs/id/${jobId}`);
    //   if (response.status === 200) {
    //     const userIds = response.data.appliedBy;
    //     const updatedApplicants = [];

    //     for (const userId of userIds) {
    //       try {
    //         userResponse = await axios.get(`/auth/getUser/${userId}`);
    //         if (userResponse.status === 200) {
    //           updatedApplicants.push({
    //             userId,
    //             applicant: userResponse.data.data,
    //           });
    //         } else {
    //           console.error(userResponse.data.message);
    //         }
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     }
    //     setApplicants(updatedApplicants);
    //   } else {
    //     console.error(response.data.message);
    //   }
    // } catch (e) {
    //   console.error(e);
    // }
    window.display_users.showModal();
  };
  return (
    <div>
      <button onClick={() => getJobsById(jobId)} className="btn btn-sm">
        View
      </button>
      <dialog id="display_users" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Applied users for the job</h3>
          {applicants.map((applicant) => (
            <div>
              <GetUserPill
                cv={getCv}
                accept={acceptUser}
                jobId={jobId}
                userId={applicant.userId}
                title={jobName}
                applicants={applicant.applicant}
              />
            </div>
          ))}
          <div className="modal-action">
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`auth/users/${userId}`);
    if (response.status === 200) {
      message.success(response.data.message);
    } else {
      message.error(response.data.message);
    }
  } catch (error) {
    console.error(error);
  }
};
export function GetAllUsers() {
  const [users, setUsers] = useState([]); // State to store the applicants
  const [selectedUser, setSelectedUser] = useState([]);
  const downloadCV = async () => {
    // try {
    //   console.log(selectedUser);
    //   const response = await axios.get(`${selectedUser.cv}`, {
    //     responseType: "blob",
    //   });
    //   console.log(response);
    //   // Create a URL for the blob data
    //   const url = window.URL.createObjectURL(new Blob([response.data]));

    //   // Create a temporary anchor element to trigger the download
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", `${selectedUser.fullName}_cv.pdf`); // You can set the desired filename here
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // } catch (error) {
    //   console.error(error);
    // }
  };
  const demoApplicants = [
    {
      userId: "1",
      applicant: {
        fullName: "John Doe",
        email: "john@example.com",
        phoneNumber: "123-456-7890",
        cv: "/path/to/john_cv.pdf",
      },
    },
    {
      userId: "2",
      applicant: {
        fullName: "Jane Smith",
        email: "jane@example.com",
        phoneNumber: "987-654-3210",
        cv: "/path/to/jane_cv.pdf",
      },
    },
  ];
  const getUsers = async () => {
    // try {
    //   const accessToken = localStorage.getItem("token");
    //   const headers = {
    //     Authorization: `${accessToken}`,
    //   };
    //   const response = await axios.get("/users", { headers });
    //   if (response.status === 200) {
    //     const userIds = response.data.data;
        setUsers(demoApplicants);
    //   } else {
    //     console.error(response.data.message);
    //   }
    // } catch (e) {
    //   console.error(e);
    // }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div
          class="spacer card w-96 bg-primary text-primary-content"
          style={{ padding: 10 }}
        >
          <div className="card-header">
            <img src={user.profile} alt="Logo" className="logo" />
            <h1 className="card-title">{user.fullName}</h1>
            <div></div>
          </div>
          <div class="card-body">
            <h3 class="card-title" className="text-xl font">
              {user.email}
            </h3>
            <h3 class="card-title" className="text-xl font">
              {user.phoneNumber}
            </h3>
            <div class="card-actions justify-end">
              <button
                className="btn btn-sm"
                onClick={() => {
                  setSelectedUser(user);
                  console.log("TESTING");
                  console.log(user);
                  console.log(selectedUser);
                  downloadCV();
                }}
              >
                CV
                <AiOutlineDownload />
              </button>
              <button
                className="btn btn-sm"
                onClick={() => {
                  setSelectedUser(user);

                  window.deleteUserModal.showModal();
                }}
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
      <dialog
        id="deleteUserModal"
        className="modal modal-bottom sm:modal-middle"
      >
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Delete User !!!</h3>
          <p className="py-4">
            Are you sure you want to delete this user account?
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">No</button>
            <button
              className="btn"
              onClick={() => deleteUser(selectedUser._id)}
            >
              Yes
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
