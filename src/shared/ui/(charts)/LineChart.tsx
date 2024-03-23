"use client";

import { cn } from "@/shared/lib/utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  options: any;
  data: any;
  className?: string;
}

const LineChart: FC<Props> = ({ options, data, className }) => {
  return (
    <Line
      options={{ ...options }}
      data={data}
      className={cn("", className)}
    />
  );
};

export default LineChart;
