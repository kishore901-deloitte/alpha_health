import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AddDoctorsAPI, GetDoctors } from "../routes/routes";
import UserContext from "./contexts/UserContext";
import Navbar from "./Navbar";
import UserList from "./UserList";
import DoctorsModal from "./DoctorsModal";

const AdminDashboard = () => {
  const { user } = useContext(UserContext);
  const [doctorsList, setDoctorsList] = useState([]);
  const [docListLoading, setDocListLoading] = useState(false);

  const LoadDoctors = async () => {
    setDocListLoading(true);
    const response = await GetDoctors("http://localhost:3000/users");
    if (response.status === 200) {
      let docList = response.data.filter((doc) => doc.role === "doctor");
      setDoctorsList(docList);
    } else {
      setDoctorsList([]);
      toast.error(response.data);
    }
    setDocListLoading(false);
  };


  useEffect(() => {
    LoadDoctors();
  }, []);
  return (
    <>
      <Navbar />
      <div className="mx-36">
        <div className="mt-10">
          <h3>
            Hello {user?.name}. You are admin and can Add/Update Doctor and
            Patient List.
          </h3>
          <div>
            <UserList data={doctorsList} loading={docListLoading} />
          </div>
        </div>
        <DoctorsModal LoadDoctors={LoadDoctors}/>
      </div>
    </>
  );
};

export default AdminDashboard;
