import React, { useState, useEffect } from 'react'
import Chart from 'chart.js'

function ChartArea({ name, type })
{
  useEffect(() => {
    //CreateChart(name, type)
  })
  return (
    <article>
      <canvas id={name} aria-label="donut chart" role="img"></canvas>
    </article>
  )
}

export { ChartArea };

// function CreateChart(name, type)
// {
//   let data = getDataForType(type)
//   let chart = new Chart (document.getElementById(`${name}`), {
//     type: type,
//     data: {
//       labels: Object.keys(data),
//       datasets: [{ 
//         label: `${settings.name}`,
//         data: Object.values(data), 
//         borderColor, 
//         backgroundColor, 
//         borderWidth: 1 
//       }]
//     },
//     options: options,
//   })
// }

// function getDataForType(type)
// {
//   if (type === 'bar')
// }
