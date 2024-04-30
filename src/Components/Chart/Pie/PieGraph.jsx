import React from "react";
import Header from "../../Header/Header";
import { PieChart } from "../../Charts/Charts";
import "../Common.css";
import "./Pie.css";
import { useSelector } from "react-redux";
import {
  getCategoriesColors,
  getDateColors,
  getUserColors,
} from "../../../utils/features";
import { processData } from "../../../utils/dateProcess";

const PieGraph = () => {
  const { friends } = useSelector((state) => state.dataReducer);

  const { user, spend, categories, categoriesSpend, date, dateVal } =
    processData(friends);

  const userBackgroundColors = getUserColors(user);
  const dateBackgroundColors = getDateColors(date);
  const categoriesBackgroundColors = getCategoriesColors(categories);

  return (
    user && (
      <>
        <Header />
        <div className="bar pie">
          <section>
            <PieChart
              data={spend}
              labels={user}
              backgroundColor={userBackgroundColors}
              hoverOffset={10}
            />
            <h2>Total Spends (user wise)</h2>
          </section>
          <section>
            <PieChart
              data={dateVal}
              labels={date}
              backgroundColor={dateBackgroundColors}
              hoverOffset={10}
            />
            <h2>Total Spends (date wise)</h2>
          </section>

          <section>
            <PieChart
              data={categoriesSpend}
              labels={categories}
              backgroundColor={categoriesBackgroundColors}
              hoverOffset={10}
            />
            <h2>Total Spends (Categories wise)</h2>
          </section>
        </div>
      </>
    )
  );
};

export default PieGraph;
