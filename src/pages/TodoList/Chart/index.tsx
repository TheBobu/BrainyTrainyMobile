import React from "react";
import "./Chart.css";
import "./ChartBar.css";

const Chart = (props: any) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: { value: any }) => dataPoint.value
  ); 
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: { label: any; value: any }) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;

const ChartBar = (props: any) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chartBar">
      <div className="charrBarInner">
        <div className="chartBarFill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chartBarLabel">{props.label}</div>
    </div>
  );
};
