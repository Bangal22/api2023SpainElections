import type { ChartConfiguration } from "chart.js";
import type { PieConfig } from "@model/index";

export const pieConfiguration = ({ 
    labels,
    values,
    title,
    color = "#82CDFF",
    bColor = "#059BFF",
    axis = "x"
}: PieConfig
) => {
    const config : ChartConfiguration<'pie'> = {
        type: "pie",
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
}  