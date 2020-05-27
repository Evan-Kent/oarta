import React, { useState } from "react";
import defaultDashboards from '../utilities/default-dashboard'
import { Widget } from './Widget'

function DashboardList({ dashboards }) {
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
      <Dashboard data={ defaultDashboards[currentDashboard] } />
    </div>
  );
}

DashboardList.defaultProps = {
  dashboards : defaultDashboards
}

function Dashboard({ data }) {
  console.log(data)
  return (
    <div className="dashboard">
      {
        data.widgets.map(widget => <Widget settings={widget} />)
      }
    </div>
  )
}

export { DashboardList, Dashboard };
