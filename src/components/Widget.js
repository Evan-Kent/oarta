import React, { useState, useEffect, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTimes } from "@fortawesome/free-solid-svg-icons";
import { HorizontalBarChart, StackedBarChart, DoughnutChart } from "./Charts";

function WidgetList() {
  let content = "Widget List!";
  return content;
}

function Widget({ settings, data }) {
  const [chart, setChart] = useState("")


  let doughnutSettings = {}

  useEffect(() => {

    if (settings && data) {
      if (settings.type === 'horizontalBar') 
        setChart(<HorizontalBarChart settings={settings} data={data} />)
      else if (settings.type === 'bar') 
        setChart(<StackedBarChart settings={settings} data={data} />)
      else setChart(<DoughnutChart settings={settings} data={data} />)
    }
  }, [data, settings]);

  return (
    <section className="card">
      <div className="card-container" draggable="true">
        <header>
          <h3>{settings.name}</h3>
          <div>
            <button className="config">
              <FontAwesomeIcon icon={faCog} />
            </button>
            <button className="config">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </header>
        { chart }
      </div>
    </section>
  );
}

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

Widget.defaultProps = {
  options: {
    legend: {
      position: "right",
    },
  },
};

export { WidgetList, Widget };
