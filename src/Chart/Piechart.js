import React from 'react'
import {Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import {CategoryScale} from 'chart.js'; 
ChartJS.register(CategoryScale);
function Piechart({data}) {


  return (
    <Pie  data={data} />
  )
}

export default Piechart