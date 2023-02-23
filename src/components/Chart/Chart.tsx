import React from "react";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";
import "./Chart.scss";

type Props = {
  dataPoints: { label: string; value: number }[];
};

const Chart: React.FC<Props> = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Card className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </Card>
  );
};

export default Chart;
