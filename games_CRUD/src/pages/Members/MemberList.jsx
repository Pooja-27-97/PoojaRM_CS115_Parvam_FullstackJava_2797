import React, { useEffect, useState } from "react";
import MemberTable from "../../components/tables/MemberTable";
import { getAllMembers, deleteMember } from "../../api/memberApi";
import Button from "../../components/shared/Button";
import Loader from "../../components/shared/Loader";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const data = await getAllMembers();
      setMembers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching members:", error);
      setMembers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleEdit = (member) => {
    navigate(`/members/edit/${member.memberId}`);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteMember(id);
        fetchMembers();
        Swal.fire("Deleted!", "Member has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting member:", error);
        Swal.fire("Error!", "Failed to delete member.", "error");
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Members</h2>
        <Button onClick={() => navigate("/members/add")} className="btn btn-outline-primary">Add Member</Button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <MemberTable
          members={members}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default MemberList;
