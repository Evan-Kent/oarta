let data = {
  blue: 21,
  yellow: 11,
  red: 4,
  teal: 18,
  purple: 9,
  orange: 9,
  unknown: 4,
}

let options = {
  legend: {
    position: "bottom",
  },
}

let dataset = {
  data: Object.values(data),
  borderColor: [
    "rgba(44, 152, 225, 1)",
    "rgba(325, 186, 66, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(55, 172, 172, 1)",
    "rgba(133, 82, 235, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(159, 159, 159, 1)",
  ],
  backgroundColor: [
    "rgba(54, 162, 235, 0.7)",
    "rgba(255, 206, 86, 0.7)",
    "rgba(255, 99, 132, 0.7)",
    "rgba(75, 192, 192, 0.7)",
    "rgba(153, 102, 255, 0.7)",
    "rgba(255, 159, 64, 0.7)",
    "rgba(199, 199, 199, 0.7)",
  ],
  borderWidth: 1
}

let aChart = new Chart(document.getElementById("aChart"), {
  type: "doughnut",
  data: {
    labels: Object.keys(data),
    datasets: [ dataset ],
  },
  options: options,
});