import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons'

function WidgetList()
{
  let content = 'Widget List!'
  return (
        content
  )
}

function Widget({ settings })
{
  return (
    <section class="card">
    <div class="card-container" draggable="true">
      <header>
        <h3>{settings.name}</h3>
        <div>
          <button class="config"><FontAwesomeIcon icon={faCog} /></button>
          <button class="config"><FontAwesomeIcon icon={faTimes} /></button>
        </div>
      </header>
      <article>
        <canvas id="aChart" aria-label="donut chart" role="img"></canvas>
      </article>
    </div>
  </section>
  )
}

export { WidgetList, Widget };