"use client"
import { Chart as ChartJS, CategoryScale, ArcElement, BarElement, LinearScale, Title, Tooltip, Legend } from 'chart.js'
import { Pie, Bar } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement)

export default function ChartPage() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const
            },
            title: {
                display: true,
                text: "Chart.js Bar Chart"
            },
        },
    }
    const labels = ["Person1", "Person2", "Person3"]

    const data2 = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [12, 19, 3, 5, 2, 3, 15],
                backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
                label: "Dataset 2",
                data: [2, 29, 5, 5, 2, 3, 10],
                backgroundColor: "rgba(54, 162, 235, 0.5)"
            },
        ],
    }

    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: "top"
    //         },
    //         title: {
    //             display: true,
    //             text: "Chart.js Bar Chart"
    //         }
    //     },
    //     maintainAspectRatio: false,
    // };

    // const Bardata = {
    //     labels, // x軸のラベルの配列
    //     datasets: [
    //         {
    //             label: "Dataset 1", // 凡例
    //             data: data1,        // データの配列(labelsと要素数同じ)
    //             backgroundColor: "rgba(255, 99, 132, 0.5)" // グラフの棒の色
    //         },
    //         {
    //             label: "Dataset 2",
    //             data: data2,
    //             backgroundColor: "rgba(53, 162, 235, 0.5)"
    //         }
    //     ]
    // };

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }} /> */}
            {/* <Bar data={Bardata} options={options}/> */}
            <div className="">
                <Bar className='w-100' options={options} data={data2} />
            </div>
        </div>
    )
}