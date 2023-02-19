import CanvasJSReact from "../../Components/CanvasJS/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Chart = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "ACME Corporation Apparel Sales",
    },
    data: [
      {
        type: "doughnut",
        innerRadius: "40%",
        showInLegend: true,
        legendText: "{label}",
        indexLabel: "{label}: #percent%",
        dataPoints: [
          { label: "Department Stores", y: 6492917 },
          { label: "Discount Stores", y: 7380554 },
          { label: "Stores for Men / Women", y: 1610846 },
          { label: "Teenage Specialty Stores", y: 950875 },
          { label: "All other outlets", y: 900000 },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Chart;
