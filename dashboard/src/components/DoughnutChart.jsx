import React from 'react'
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({chartData}) => {
  return (
    <div>
      <div className="chart-container">
      <Doughnut
        data={chartData}
        options={{
          plugins: {
          }
        }}
      />
    </div>
    </div>
  )
}

export default DoughnutChart
