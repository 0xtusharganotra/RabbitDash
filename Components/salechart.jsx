import { colors } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Month", "Sales", "Revenue"],
  [0, 20, 4000],
  [1, 50, 10000],
  [2, 60, 11020],
  [3, 103, 54000],
  [4, 20, 4000],
  [5, 50, 10000],
  [6, 60, 11020],
  [7, 103, 54000],
  [8, 20, 4000],
  [9, 50, 10000],
  [10, 60, 11020],
  [11, 103, 54000],
];

const options = {
  backgroundColor: "transparent",
  LegendTextStyle: "white",
  hAxis: {
    textStyle: { color: "white" },
    titleTextStyle: { color: "white" },
  },
  vAxis: {
    textStyle: { color: "white" },
    titleTextStyle: { color: "white" },
  },
  legend: {
    textStyle: { color: "white" },
  },
  titleTextStyle: { color: "white" },
};

function LineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="200px"
      data={data}
      options={options}
    />
  );
}

export default LineChart;
