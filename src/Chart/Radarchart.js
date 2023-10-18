import React from 'react'
import { Radar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import {CategoryScale} from 'chart.js'; 
ChartJS.register(CategoryScale);

function Radarchart({data}) {


  return (
    <Radar data={data} />
  )
}

export default Radarchart