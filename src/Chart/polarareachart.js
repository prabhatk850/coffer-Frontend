import React from 'react'
import { PolarArea} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
function polarareachart({data}) {


  return (
    <PolarArea data={data} />
  )
}

export default polarareachart