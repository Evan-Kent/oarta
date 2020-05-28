import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons'
import Chart from 'chart.js'

function WidgetList()
{
  let content = 'Widget List!'
  return (
        content
  )
}

function Widget({ settings, data, options })
{
  console.log(settings)
  console.log(data)
  useEffect(() => {
    if (settings !== null && data !== null) {
      let chart = new Chart (document.getElementById(`${settings.name}`), {
        type: settings.type,
        data: {
          labels: Object.keys(data),
          datasets: [{ 
            label: `${settings.name}`,
            data: Object.values(data), 
            borderColor, 
            backgroundColor, 
            borderWidth: 1 
          }]
        },
        options: options,
      });
    }
  })

  return (
    <section className="card">
    <div className="card-container" draggable="true">
      <header>
        <h3>{settings.name}</h3>
        <div>
          <button className="config"><FontAwesomeIcon icon={faCog} /></button>
          <button className="config"><FontAwesomeIcon icon={faTimes} /></button>
        </div>
      </header>
      <article>
        <canvas id={settings.name} aria-label="donut chart" role="img"></canvas>
      </article>
    </div>
  </section>
  )
}

const borderColor = [
  "rgb(255, 0, 93)",
  "rgb(247, 185, 251)",
  "rgb(59, 35, 158)",
  "rgb(112, 218, 253)",
  "rgb(102, 183, 121)",
  "rgb(246, 249, 205)",
  "rgb(253, 124, 0)"
]

const backgroundColor = [
  "rgba(255,  0,    93,   .8)",
  "rgba(247,  185,  251,  .8)",
  "rgba(59,   35,   158,  .8)",
  "rgba(112,  218,  253,  .8)",
  "rgba(102,  183,  121,  .8)",
  "rgba(246,  249,  205,  .8)",
  "rgba(253,  124,  0,    .8)"
]

Widget.defaultProps = {
  options: {
    legend: {
      position: "bottom"
    }
  }
}

export { WidgetList, Widget };