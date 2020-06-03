export default [
  { 
    name: "Characters", 
    widgets: [
      {
        settings: {
          name: "Quotes Per Character",
          type: "horizontalBar",
          options: {
            responsive: true,
            title: { display: false },
            legend: {
              position: 'bottom',
            }
          }
        }
      }, 
      {
        settings: {
          name: "Movie Awards",
          type: "bar",
          options: {
            responsive: true,
            legend: {
              position: "bottom",
            },
            tooltips: {
              mode: 'index',
              intersect: false
            },
            title: {
              display: false
            },
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
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
    ]
  },
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
    ]
  },
];
