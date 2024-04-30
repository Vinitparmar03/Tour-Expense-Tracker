import React, { useState } from "react";
import Header from "../Header/Header";
import "./AddExpense.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../Redux/Reducer/DataReducer";

const AddExpense = () => {
  const [money, setMoney] = useState(0);
  const [where, setWhere] = useState("");
  const [member, setMember] = useState("");
  const { friends } = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  const categories = new Set();

  Object.values(friends).forEach((friend) => {
    if (friend.hasOwnProperty("spends")) {
      Object.keys(friend.spends).forEach((where) => {
        categories.add(where);
      });
    }
  });

  const filteredCategories = Array.from(categories).filter(
    (category) =>
      category.toLowerCase().includes(where.toLowerCase()) && where !== ""
  );

  const handleAddData = (e) => {
    e.preventDefault();
    if (money <= 0 || member === "" || where === "") {
      return toast.error("Please fill all the fields");
    }

    dispatch(addData({ member, money, where }));
    setWhere("");
    setMoney(0);
    setMember("");
    toast.success("Expense added successfully");
  };

  const handleSuggestionClick = (category) => {
    setWhere(category);
  };

  return (
    <>
      <Header />
      <div className="add-expense">
        <div className="add-expense-form">
          <select
            value={member}
            onChange={(e) => {
              setMember(e.target.value);
            }}
          >
            <option value="">Select a member</option>
            {friends &&
              Object.keys(friends)?.map(
                (i) =>
                  i !== "date" && (
                    <option value={i} key={i.toUpperCase()}>
                      {i}
                    </option>
                  )
              )}
          </select>
          <input
            type="number"
            placeholder="Money"
            value={money}
            onChange={(e) => {
              setMoney(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Where to use"
            value={where}
            onChange={(e) => {
              setWhere(e.target.value);
            }}
          />
          {filteredCategories.length > 0 && (
            <ul className="suggestion">
              {filteredCategories.map((category, index) => (
                <li key={index} onClick={() => handleSuggestionClick(category)}>
                  {category}
                </li>
              ))}
            </ul>
          )}
          <button
            className="btn"
            onClick={(e) => {
              handleAddData(e);
            }}
          >
            Add Spending
          </button>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
