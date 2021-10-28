import React from "react";
import Chart from "../Chart";


const ToDoChart = (props:any) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //after this for, the chartDataPoints won't have 0's but will have the summed up values of a month
  for (const toDo of props.toDos) {
    const expenseMonth = toDo.date.getMonth(); //that date staring at 0. Jan == 0
    chartDataPoints[expenseMonth].value += 1; //increasing the value of a given month by toDo amount
  }
  return <Chart dataPoints={chartDataPoints}></Chart>;
};

export default ToDoChart;
