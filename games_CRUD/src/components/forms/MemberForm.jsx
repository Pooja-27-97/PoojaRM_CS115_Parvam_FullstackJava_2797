import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MemberForm = ({ initialData, onSubmit }) => {
  const navigate = useNavigate();

  // Form state
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [phone, setPhone] = useState(initialData?.phone || "");
  const [status, setStatus] = useState(initialData?.status || "ACTIVE");

  // Update state if initialData changes (for edit)
  useEffect(() => {
    setName(initialData?.name || "");
    setEmail(initialData?.email || "");
    setPhone(initialData?.phone || "");
    setStatus(initialData?.status || "ACTIVE");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, phone, status };

    if (initialData?.memberId) {
      formData.memberId = initialData.memberId;
    }

    onSubmit(formData);
  };

  const handleCancel = () => {
    navigate("/members"); // Go back to members list
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          type="tel"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Status</label>
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {initialData ? "Update" : "Add"} Member
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default MemberForm;
