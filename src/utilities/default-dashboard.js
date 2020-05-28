export default [
  { 
    name: "Characters", 
    widgets: [
      {
        settings: {
          name: "Boromir",
          type: "doughnut",
          chartOptions: {
            legend: {
              position: "bottom",
            }
          }
        },
        data : {red: 1, blue: 2, green: 3}
      }, 
      {
        settings: {
          name: "Legolas",
          type: "bar",
          chartOptions: {
            legend: {
              position: "bottom",
            },
          }
        },
        data : {
          blue: 21,
          yellow: 11,
          red: 4,
          teal: 18,
          purple: 9,
          orange: 9,
          unknown: 4,
        }
      }, 
      {
        settings: {
          name: "Gimli",
          type: "line",
          chartOptions: {
            legend: {
              position: "bottom",
            },
          }
        },
        data : {red: 1, blue: 2, green: 3}
      }
    ]},
  { 
    name: "Movies", 
    widgets: [
      {
        name: "The Fellowship of the Ring"
      },
      {
        name: "The Two Towers"
      }, 
      {
        name: "An Unexpected Journey"
      },
      {
        name: "The Desolation of Smaug"
      }
    ]},
];
