import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MemberForm from "../../components/forms/MemberForm";
import { getMemberById, createMember, updateMember } from "../../api/memberApi";
import Loader from "../../components/shared/Loader";

const MemberFormPage = () => {
  const { id } = useParams(); // undefined for add
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      getMemberById(id)
        .then((res) => setMember(res))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      if (id) {
        await updateMember(id, formData);
      } else {
        await createMember(formData);
      }
      navigate("/members");
    } catch (error) {
      console.error("Error saving member:", error);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Member" : "Add Member"}</h2>
      <div className="card p-3">
        <MemberForm initialData={member} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default MemberFormPage;
