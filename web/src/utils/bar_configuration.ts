import type { ChartConfiguration } from "chart.js";
import type { BarConfig } from "@model/index";

export const barConfiguration = ({
  labels,
  values,
  title = "",
  color = "#82CDFF",
  bColor = "#059BFF",
  axis = "x"
}: BarConfig) => {
  const config: ChartConfiguration<'bar'> =  {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: color,
          borderColor: bColor,
        },
      ],
    },
    options: {
      indexAxis: axis,
      maintainAspectRatio: true, //Poner a falso mas adelante para que ocupe todo el height 
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "top",
        },
        title: {
          display: true,
          text: title,
        },
      },
    },
  };
  return config
};