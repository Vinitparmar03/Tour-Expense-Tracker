import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";

const Header = () => {
  const [active, setActive] = useState("Add-Expense");
  const [classActive, setClassActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const lastAddress = location.pathname.split("/").pop();
    setActive(lastAddress);
  }, [location]);

  return (
    <div className="nav-bar">
      <h1>ExpenseEase</h1>
      <CgMenuRightAlt onClick={() => setClassActive((prev) => !prev)} />
      <ul className={`nav-list ${classActive ? "open" : ""}`}>
        <Link to={"/add-expense"}>
          <li className={active === "add-expense" ? "active" : ""}>
            Add Expense
          </li>
        </Link>

        <Link to={"/expense-list"}>
          <li className={active === "expense-list" ? "active" : ""}>
            Expense List
          </li>
        </Link>

        <Link to={"/bar"}>
          <li className={active === "bar" ? "active" : ""}>Bar</li>
        </Link>

        <Link to={"/line"}>
          <li className={active === "line" ? "active" : ""}>Line</li>
        </Link>

        <Link to="/pie">
          <li className={active === "pie" ? "active" : ""}>Pie</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
