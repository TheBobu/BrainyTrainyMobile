import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
type Props = {
    chartDataScore: { name: string, score: number }[],
    chartDataTime: { name: string, time: number }[],
    title: string,
}

const StatsCharts: React.FC<Props> = (props) => {
    return (
        <div className="chart-wrapper">
            <h1>{props.title}</h1>
            <h2>Score</h2>
            <AreaChart
                width={400}
                height={200}
                data={props.chartDataScore}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="2 1" />
                <XAxis dataKey="name" tickMargin={10}/>
                <YAxis tickMargin={10}/>
                <Tooltip />
                <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#4099ff" />
            </AreaChart>
            <h2>Time Completed</h2>
            <AreaChart
                width={400}
                height={200}
                data={props.chartDataTime}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="2 1" />
                <XAxis dataKey="name" tickMargin={10}/>
                <YAxis tickMargin={10}/>
                <Tooltip />
                <Area type="monotone" dataKey="time" label="time(sec)" stroke="#8884d8" fill="#4099ff" />
            </AreaChart>
        </div>
    )
}

export default StatsCharts;