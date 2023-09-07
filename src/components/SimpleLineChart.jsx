import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const SimpleLineChart = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        // Keep the theme minimal and related to the line only
      }}
      colors={{ scheme: "nivo" }}
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }} // Adjusted margins
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={null} // Set to null to hide the bottom axis
      axisLeft={null}   // Set to null to hide the left axis
      enableGridX={false}
      enableGridY={false}
      pointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]} // Empty array to hide legends
    />
  );
};

export default SimpleLineChart;
