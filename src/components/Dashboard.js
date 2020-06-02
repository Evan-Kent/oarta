import React, { useState, useEffect } from "react";
import defaultDashboards from '../utilities/default-dashboard'
import { Widget } from './Widget'
import api from "../utilities/api";


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
  return (
    <div className="dashboard">
      {
        data.widgets.map((widget, i) => <Widget key={i} settings={widget.settings} data={widget.data} />)
      }
    </div>
  )
}

export { DashboardList, Dashboard };
