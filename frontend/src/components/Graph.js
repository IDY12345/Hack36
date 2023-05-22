import React, { useState } from 'react'
import { UserData } from "./UserData";
import { Chart } from 'chart.js';

import { Bar } from "react-chartjs-2";
import BarChart from './BarChart';
import LineChart from './LineChart';
function Graph() {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    });

    const [lost, setLost] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Lost",
                data: UserData.map((data) => data.userLost),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                borderColor: "white",
                borderWidth: 2,
            },
        ],
    });

    return (
        <div className='Bar'>
            <div style={{ width: 700 , marginLeft:400,marginTop:100 , backgroundColor:"black" }}>
                <BarChart chartData={userData} />
            </div>
            <div style={{ width: 700, marginLeft:400, marginTop:100, backgroundColor:"black" }}>
                <BarChart chartData={lost} />
            </div>
            <div style={{ width: 700, marginLeft:400, marginTop:100, backgroundColor:"black" }}>
                <LineChart chartData={userData} />
            </div>
            <div style={{ width: 700, marginLeft:400, marginTop:100, backgroundColor:"black" }}>
                <LineChart chartData={lost} />
            </div>
        </div>
    );
}

export default Graph