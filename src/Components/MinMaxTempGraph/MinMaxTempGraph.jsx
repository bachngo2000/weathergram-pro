import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from "recharts";

const MinMaxTempGraph = ({pastWeather}) => {
    return (
        <div>
            <LineChart width={800} height={300} data={pastWeather}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >

                <Line type="monotone" dataKey="max_temp" stroke="blue" />

                <Line type="monotone" dataKey="min_temp" stroke="red" />

                <CartesianGrid stroke="white" strokeDasharray="5 5"/>

                <XAxis dataKey="datetime" tickMargin={10}>
                </XAxis>
                <YAxis unit='°F' tickMargin={5} />
                <Tooltip />
            </LineChart>
        </div>
    )
};

export default MinMaxTempGraph;