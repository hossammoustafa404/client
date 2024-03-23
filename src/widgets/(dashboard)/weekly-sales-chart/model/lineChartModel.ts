export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["2023-11-10", "2023-11-13", "2023-11-16"];

export const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: [
        ["2023-11-10", 300],
        ["2023-11-13", 800],
        ["2023-11-16", 100],
      ],
      backgroundColor: "green",
    },
  ],
};
