"use client"
import React, {useState} from "react"
import { Chart as ChartJS, CategoryScale, ArcElement, BarElement, LinearScale, Title, Tooltip, Legend } from 'chart.js'
import { Pie, Bar } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement)

export default function ChartPage() {
    const labels = ['PersonA', 'PersonB', 'PersonC']
    const [time1, setTime1] = useState([10, 20, 30])
    const [time2, setTime2] = useState([20, 30, 40])
    const update1 = (data:number[]) => {
        var tmp:number[] = []
        data.map((item, index) => {
            item = item * 2
            tmp.push(item)
        })
        setTime1(tmp)
    }
    const update2 = (data:number[]) => {
        var tmp: number[] = []
        data.map((item, index) => {
            item = item * 2
            tmp.push(item)
        })
        setTime2(tmp)
    }

    const options = {
        responsive: true,
    }
    const data = {
        labels,
        datasets: [{
            label: "time",
            data: time1,
            backgroundColour: 'rbga(255, 0, 0, 0.2)',
        },{
            label: "time",
            data: time2,
            backgroundColour: 'rbga(0, 255, 0, 0.2)',
        }]

    }

    return (
        <div className="">
            {/* <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} /> */}
            {/* <Bar data={Bardata} options={options}/> */}
            <div className="">
                <Bar data={data} options={options}/>
            </div>
            <button onClick={() => update1(time1)}>update1</button>
            <button onClick={() => update2(time2)}>update2</button>
        </div>
    )
}