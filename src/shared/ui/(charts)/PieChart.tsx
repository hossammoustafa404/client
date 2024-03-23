"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FC } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: any;
}

const PieChart: FC<Props> = ({ data }) => {
  return <Pie data={data} />;
};

export default PieChart;
