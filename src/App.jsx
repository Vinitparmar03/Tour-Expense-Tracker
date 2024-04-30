import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./Components/Authenticate/Authenticate";
import AddExpenses from "./Pages/AddExpenses";
import ExpensesList from "./Pages/ExpensesList";
import Bar from "./Pages/Graphs/Bar";
import Line from "./Pages/Graphs/Line";
import Pie from "./Pages/Graphs/Pie";
import Home from "./Pages/Home";
import Loader from "./Components/Loader.css/Loader";
import NotFound from "./Components/Not Found/NotFound";

const App = () => {
  const { friends } = useSelector((state) => state.dataReducer);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (friends) {
      const filterData = Object.keys(friends).filter((key) => key !== "date");
      const updatedData = [...new Set([...data, ...filterData])];
      setData(updatedData);
    }
  }, [friends]);

  if (localStorage.getItem("expenseData") && data.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route
            element={
              <ProtectedRoute
                isAuthenticated={data.length !== 0 ? false : true}
                redirect="/add-expense"
              />
            }
          >
            <Route path="/" element={<Home />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAuthenticated={data.length !== 0 ? true : false}
                redirect="/"
              />
            }
          >
            <Route path="/add-expense" element={<AddExpenses />} />
            <Route path="/expense-list" element={<ExpensesList />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/line" element={<Line />} />
            <Route path="/pie" element={<Pie />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        <Toaster position="bottom-center" />
      </Router>
    </div>
  );
};

export default App;
