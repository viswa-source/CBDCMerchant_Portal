import Box from "@mui/material/Box";
import CanvasJSReact from "../../Components/CanvasJS/canvasjs.react";
import { Colors } from "../../Utils/Colors";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Graph = () => {
  const options = {
    animationEnabled: true,
    // exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "column",
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 71 },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 92, indexLabel: "Highest" },
          { x: 90, y: 54 },
          { x: 100, y: 60 },
          { x: 110, y: 21 },
          { x: 120, y: 49 },
          { x: 130, y: 36 },
        ],
      },
    ],
  };

  return (
    <Box component="main" sx={{ flex:2, p: 3, bgcolor: Colors.DASHBOARD,mt:'3%' }}>

      <CanvasJSChart options={options} />
    </Box>
  );
};

export default Graph;
