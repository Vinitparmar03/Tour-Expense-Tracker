import React, { useEffect } from "react";
import Header from "../../Header/Header";
import { BarChart } from "../../Charts/Charts";
import "../Common.css";
import { useSelector } from "react-redux";
import { processData } from "../../../utils/dateProcess";

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInteger = getRandomInteger(2, 360);

const BarGraph = () => {
  const { friends } = useSelector((state) => state.dataReducer);
  const { user, spend, categories, categoriesSpend, date, dateVal } =
    processData(friends);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="bar">
        <section>
          <BarChart
            data1={spend}
            labels={user}
            title="Total Spends (user wise)"
            bgColor={`hsl(${randomInteger}, 80%, 40%)`}
          />
          <h2>Total Spend (user wise)</h2>
        </section>
        <section>
          <BarChart
            data1={dateVal}
            labels={date}
            title="Total Spends (date wise)"
            bgColor={`hsl(${randomInteger}, 100%, 80%)`}
          />
          <h2>Total Spend (date wise)</h2>
        </section>
        <section>
          <BarChart
            data1={categoriesSpend}
            labels={categories}
            title="Total Spends (categories wise)"
            bgColor={`hsl(${randomInteger * 2.2}, 40%, 50%)`}
          />
          <h2>Total Spend (categories wise)</h2>
        </section>
      </div>
    </>
  );
};

export default BarGraph;
