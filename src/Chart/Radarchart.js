import React from 'react'
import { Radar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

function Radarchart({data}) {


  return (
    <Radar data={data} />
  )
}

export default Radarchart