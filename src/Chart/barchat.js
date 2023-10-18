import React from 'react'
import { Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import {CategoryScale} from 'chart.js'; 
ChartJS.register(CategoryScale);
function barchat({data}) {


  return (
    <Bar data={data} />
  )
}

export default barchat