import React, { useEffect, useState } from "react";
import "./Partner.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addFriends } from "../../Redux/Reducer/DataReducer";
import toast from "react-hot-toast";

const Partners = () => {
  const [partner, setPartner] = useState("");
  const [partners, setPartners] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addPartner = (e) => {
    e.preventDefault();

    if (partner === "") {
      return toast.error("Please enter a name");
    }
    setPartners([...partners, partner]);
    setPartner("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (partners.length > 0) {
      dispatch(addFriends({ partners }));
    }

    navigate("/add-expense");
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setPartners(partners.filter((partner) => partner !== e.target.innerText));
  };

  return (
    <div className="partners">
      <div>
        <input
          type="text"
          placeholder="Enter one name"
          value={partner}
          onChange={(e) => setPartner(e.target.value)}
        />
        <button className="btn" onClick={(e) => addPartner(e)}>
          Add
        </button>
        <div>
          {partners.map((partner, index) => (
            <span
              key={index}
              className="partner-name"
              onClick={(e) => handleRemove(e)}
            >
              {partner}
            </span>
          ))}
        </div>
        <button className="btn btn-save" onClick={(e) => handleSubmit(e)}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Partners;
