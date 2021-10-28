import React from "react";
import "./Chart.css";
import './ChartBar.css';


const Chart = (props:any) => {
  const dataPointValues = props.dataPoints.map((dataPoint: { value: any; }) => dataPoint.value); // we transform a data point object to  a brand new array  of numbers.
  const totalMaximum = Math.max(...dataPointValues); // we split that array in stand-alone arguments because the max funtion wants values like ( 1,2,3)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: { label: any; value: any; }) => (
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



const ChartBar = (props:any) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='charrBarInner'>
        <div
          className='chartBarFill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};
