import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { resetData } from "../../Redux/Reducer/DataReducer";
import Header from "../Header/Header";
import "./ExpenseList.css";

const ExpenseList = () => {
  const friendsData = useSelector((state) => state.dataReducer.friends);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();

    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(resetData());
      window.location.reload();
    }
  };

  return (
    <>
      <Header />
      <div className="expense-container">
        <div className="title">
          <h1 className="title-inside">Friends Data</h1>
          <MdDelete onClick={(e) => handleDelete(e)} />
        </div>
        {friendsData && Object.keys(friendsData).length > 0 ? (
          <div className="friends-data">
            {Object.entries(friendsData).map(
              ([friendName, friendData]) =>
                friendName !== "date" && (
                  <div key={friendName} className="friend">
                    <div className="friend-name">{friendName}</div>
                    <div className="spends">
                      Spends: [
                      {Object.entries(friendData.spends).map(
                        ([where, amount], index, arr) => (
                          <span key={index} className="spends-dets">
                            {" "}
                            {where}: ₹{amount}{" "}
                            {index !== arr.length - 1 ? ", " : ""}
                          </span>
                        )
                      )}
                      ]
                    </div>
                    <div className="total">Total: {friendData.total}</div>
                    <div className="date-total">
                      {friendData.dateSpend &&
                        Object.keys(friendData.dateSpend).map((date) => (
                          <div key={date} className="date-total-inside">
                            {date}: {friendData.dateSpend[date]}
                          </div>
                        ))}
                    </div>
                  </div>
                )
            )}
          </div>
        ) : (
          <p className="error-message">No friends data found in Redux store.</p>
        )}
      </div>
    </>
  );
};

export default ExpenseList;
