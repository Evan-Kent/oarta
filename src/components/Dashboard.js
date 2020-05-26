import React, { useState } from "react";

function DashboardList({ dashboards }) {
  let [currentDashboard, setCurrentDashboard] = useState(1);

  return (
    <div className="dashboard-list-container">
      <section className="dashboard-list">
        {dashboards.map((dash, i) => (
          <button
            className="dashboard-tab"
            onClick={() => setCurrentDashboard(i)}
          >
            {dash.name}
          </button>
        ))}
      </section>
    </div>
  );
}

function Dashboard() {
  return "";
}

export { DashboardList, Dashboard };
