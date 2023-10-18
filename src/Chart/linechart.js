import React from 'react'
import { Line} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


function linechart({data}) {
  return (
    <div><Line data={data} /></div>
  )
}

export default linechart