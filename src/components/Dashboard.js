import React, { useState } from "react";
import defaultDashboards from '../utilities/default-dashboard'
import { Widget } from './Widget'


function DashboardList({ dashboards, data }) {
  let [currentDashboard, setCurrentDashboard] = useState(0);

  return (
    <div className="dashboard-list-container">
      <section className="dashboard-list">
        {dashboards.map((dash, i) => (
          <button
            className={i === currentDashboard ? 'active' : ''}
            key={dash.name}
            onClick={() => setCurrentDashboard(i)}
          >
            {dash.name}
          </button>
        ))}
      </section>
      <Dashboard data={data} widgets={ defaultDashboards[currentDashboard].widgets } />
    </div>
  );
}

DashboardList.defaultProps = {
  dashboards : defaultDashboards
}

function Dashboard({ data, widgets }) {
  return (
    <div className="dashboard">
      {
        widgets.map((widget, i) => <Widget key={i} settings={widget.settings} data={data[i]} />)
      }
    </div>
  )
}

export { DashboardList, Dashboard };
