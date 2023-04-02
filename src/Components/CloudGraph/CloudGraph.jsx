import "./CloudGraph.css";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CloudGraph = ({pastWeather}) => {
    return (
        <div>
            <BarChart width={800} height={300} data={pastWeather} 
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <Bar dataKey="clouds" fill="blue" />
                <CartesianGrid strokeDasharray="3 3" />
                <Legend />
                <XAxis dataKey="datetime" tickMargin={5} />
                <YAxis unit='%' tickMargin={5}/>
                <Tooltip />
            </BarChart>
        </div>
    )
};

export default CloudGraph;