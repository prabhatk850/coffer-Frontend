import React from 'react'
import { PolarArea} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import {CategoryScale} from 'chart.js'; 
ChartJS.register(CategoryScale);
function polarareachart({data}) {


  return (
    <PolarArea data={data} />
  )
}

export default polarareachart