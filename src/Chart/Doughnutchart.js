import React from 'react'
import { Doughnut} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function Doughnutchart({data}) {


  return (
    <Doughnut data={data} />
  )
}

export default Doughnutchart