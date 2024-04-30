import React, { useEffect } from "react";
import Header from "../../Header/Header";
import "../Common.css";
import { LineChart } from "../../Charts/Charts";
import { useSelector } from "react-redux";
import { processData } from "../../../utils/dateProcess";

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInteger = getRandomInteger(2, 150);
const LineGraph = () => {
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
          <LineChart
            data={spend}
            label="Spend (user wise)"
            borderColor="white"
            labels={user}
            backgroundColor={`rgba(${randomInteger * 3}, 162, 255, 0.5)`}
          />
          <h2>Total Spend (user wise)</h2>
        </section>
        <section>
          <LineChart
            data={dateVal}
            label="Spend (Date Wise)"
            borderColor="white"
            labels={date}
            backgroundColor={`rgba(${randomInteger * 3}, 162, 255, 0.5)`}
          />
          <h2>Total Spend (date wise)</h2>
        </section>
        <section>
          <LineChart
            data={categoriesSpend}
            label="Spend Data By Categories"
            borderColor="white"
            labels={categories}
            backgroundColor={`rgba(${randomInteger * 2}, ${
              randomInteger * 1
            }, 255, 0.6)`}
          />
          <h2>Total Spend (categories wise) </h2>
        </section>
      </div>
    </>
  );
};

export default LineGraph;
