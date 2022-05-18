import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import "./App.scss";

export const App = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  const [type, setType] = useState("radar");

  const lineOptions = {
    chart: {
      id: "apexchart-example",
      stacked: true,
      background: "#f1f7fd",
    },
    xaxis: {
      categories: [
        2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
      ],
    },
  };

  const lineSeries = [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 30, 45, 65],
    },
    {
      name: "series-2",
      data: [20, 30, 55, 75, 63, 60, 80, 134, 110, 40, 55, 64],
    },
  ];

  const pieOptions = {
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    legend: { position: "bottom" },
  };

  const pieSeries = [
    {
      series: [44, 55, 13, 43, 22],
    },
  ];

  useEffect(() => {
    if (
      type === "bar" ||
      type === "line" ||
      type === "radar" ||
      type === "area" ||
      type === "heatmap"
    ) {
      setOptions(lineOptions), setSeries(lineSeries);
    } else if (
      type === "donut" ||
      type === "histogram" ||
      type === "pie" ||
      type === "radialBar" ||
      type === "scatter" ||
      type === "bubble" ||
      type === "candleStick" ||
      type === "polarArea"
    ) {
      setOptions(pieOptions), setSeries(pieSeries);
    }
  }, [type]);

  return (
    <div className="App">
      <h1>Apex Chart with Navbar</h1>
      <nav className="navbar">
        <button onClick={() => setType("donut")}>Donut</button>
        <button onClick={() => setType("area")}>Area</button>
        <button onClick={() => setType("histogram")}>Histogram</button>
        <button onClick={() => setType("pie")}>Pie</button>
        <button onClick={() => setType("radialBar")}>Radial Bar</button>
        <button onClick={() => setType("bar")}>Bar</button>
        <button onClick={() => setType("scatter")}>Scatter</button>
        <button onClick={() => setType("radar")}>Radar</button>
        <button onClick={() => setType("bubble")}>Bubble</button>
        <button onClick={() => setType("heatmap")}>Heatmap</button>
        <button onClick={() => setType("candleStick")}>Candle Stick</button>
        <button onClick={() => setType("polarArea")}>Polar Area</button>
        <button onClick={() => setType("line")}>Line</button>
      </nav>

      <Chart
        series={series}
        options={options}
        type={type} //"bar","line", "donut","area", "radar", "histogram", "pie", "radialBar", scatter, bubble, heatmap, candlestick
        width={800}
        height={520}
      />
    </div>
  );
};
