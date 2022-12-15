import React, { useState, useEffect } from "react";
import { Spin, Modal, Button } from "antd";
import { AddDoctorsAPI } from "../routes/routes";
import { toast } from "react-toastify";

const DoctorsModal = ({ LoadDoctors }) => {
  const [docName, setDocName] = useState("");
  const [docEmail, setDocEmail] = useState("");
  const [docType, setDocType] = useState("");
  const [docPass, setDocPass] = useState("");
  const [openModal1, setOpenModal1] = useState(false);
  const [docModal1Loader, setDocModalLoader] = useState(false);

  const handleClose = () => {
    setOpenModal1(false);
    setDocModalLoader(false);
    setDocEmail("");
    setDocName("");
    setDocType("");
    setDocPass("");
  };

  const handleOkDoctor = async () => {
    console.log(docName);
    console.log(docEmail);
    console.log(docType);
    console.log(docPass);
    setDocModalLoader(true);
    const response = await AddDoctorsAPI("http://localhost:3000/register", {
      name: docName,
      email: docEmail,
      password: docPass,
      specialization: docType,
      role: "doctor",
    });

    if (response.status > "200" && response.status < "300") {
      console.log(response.data);
      setDocModalLoader(false);
      handleClose();
      LoadDoctors();
    } else {
      setDocModalLoader(false);
      toast.error(response.data);
    }
  };
  return (
    <>
      <Modal
        title="Add a new doctor"
        open={openModal1}
        destroyOnClose
        centered
        //   confirmLoading={false}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
            Cancel
          </Button>,
          <Button
            loading={docModal1Loader}
            onClick={handleOkDoctor}
            disabled={docName && docEmail && docPass ? false : true}
          >
            Done
          </Button>,
        ]}
      >
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <form>
            <div>
              <input
                className="p-2 outline-none border-b border-slate-200 mb-2"
                type="text"
                placeholder="Doctor's Name"
                value={docName}
                onChange={(e) => setDocName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="p-2 outline-none border-b border-slate-200 mb-2"
                type="text"
                placeholder="Doctor's Email"
                value={docEmail}
                onChange={(e) => setDocEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="p-2 outline-none border-b border-slate-200 mb-2"
                type="text"
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                placeholder="Specialization"
              />
            </div>
            <div>
              <input
                className="p-2 outline-none border-b border-slate-200 mb-2"
                type="password"
                placeholder="Doctor's Account Password"
                value={docPass}
                onChange={(e) => setDocPass(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
      </Modal>
      <div className="text-right">
        <button onClick={() => setOpenModal1(true)}>Add</button>
      </div>
    </>
  );
};

export default DoctorsModal;
