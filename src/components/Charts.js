import React, { useState, useEffect } from 'react'
import Chart from 'chart.js'

function HorizontalBarChart({ settings, data })
{
  useEffect(() => {
    if (settings && data)
    {
      let horizontalBarSettings = {
        type: settings.type,
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              label: `${settings.name}`,
              data: Object.values(data),
              borderColor,
              backgroundColor,
              borderWidth: 1,
            },
          ],
        },
        options: settings.options,
      }
      let chart = new Chart (document.getElementById(`${settings.name}`), horizontalBarSettings)
    }
  })
  return (
    <article>
      <canvas id={settings.name} aria-label="donut chart" role="img"></canvas>
    </article>
  )
}

function StackedBarChart({ settings, data })
{
  useEffect(() => {
    if (settings && data)
    {
      let barSettings = {
        type: settings.type,
        data: {
          labels: data.map(movie => movie.name),
          datasets: [{
            label: 'Nominations',
            backgroundColor: "rgb(121, 206, 226)",
            data: data.map(movie => movie.nominations)
          },{
            label: 'Awards',
            backgroundColor: "rgb(255, 198, 255)",
            data: data.map(movie => movie.wins)
          }]
        },
        options: settings.options
      }
      let chart = new Chart (document.getElementById(`${settings.name}`), barSettings)
    }
  })

  return (
    <article>
      <canvas id={settings.name} aria-label="donut chart" role="img"></canvas>
    </article>
  )
}

function DoughnutChart({ settings, data })
{
  useEffect(() => {
    if (settings && data)
    {
      let doughnutSettings = {
        type: settings.type,
        data: {
          labels: Object.keys(data.gender),
          datasets: [{
            label: 'Gender',
            backgroundColor,
            borderColor,
            data: Object.values(data.gender)
          }]
        },
        options: settings.options
      }
      let chart = new Chart (document.getElementById(`${settings.name}`), doughnutSettings)
    }
  })
  return (
    <article>
      <canvas id={settings.name} aria-label="donut chart" role="img"></canvas>
    </article>
  )
}

export { HorizontalBarChart, StackedBarChart, DoughnutChart };


const borderColor = [
  "rgb(255, 173, 173)",
  "rgb(255, 214, 165)",
  "rgb(253, 255, 182)",
  "rgb(202, 255, 191)",
  "rgb(155, 246, 255)",
  "rgb(121, 206, 226)",
  "rgb(160, 196, 255)",
  "rgb(189, 178, 255)",
  "rgb(255, 198, 255)",
  "rgb(255, 227, 254)",
  "rgb(253, 124, 0)"
];

const backgroundColor = [
"rgba(255, 173, 173, .8)",
"rgba(255, 214, 165, .8)",
"rgba(253, 255, 182, .8)",
"rgba(202, 255, 191, .8)",
"rgba(155, 246, 255, .8)",
"rgba(121, 206, 226, .8)",
"rgba(160, 196, 255, .8)",
"rgba(189, 178, 255, .8)",
"rgba(255, 198, 255, .8)",
"rgba(255, 227, 254, .8)",
"rgba(253, 124, 0, .8)"
];

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
