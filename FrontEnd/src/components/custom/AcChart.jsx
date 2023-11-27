import { useEffect } from "react";
import * as echarts from "echarts";

const AcChart = () => {
  useEffect(() => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const value = [30, 50, 60, 80, 70, 50, 39, 60, 100, 50, 60, 80];

    const data = month.map((month, index) => ({
      name: month,
      value: value[index],
    }));

    var myChart = echarts.init(document.getElementById("chart"));
    myChart.setOption({
      tooltip: {},
      xAxis: {
        data: data.map(item => item.name),
        axisLabel: {
          textStyle: {
            
            fontWeight:  'bold', 
          }
        }
      },
      yAxis: {
        splitLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            
            fontWeight:  'bold',
          }
        }
      },
      series: [
        {
          name: "Air quality",
          type: "bar",
          barWidth: 30,
          data: data.map(item => item.value),
          symbolSize: "7",
          lineStyle: {
            color: "#101D42",
            width: 1, 
          },
          
          itemStyle: {
            color: function (params) {
              var value = params.value;
              if (value < 50) {
                return "#42a548";
              } else if (value < 100) {
                return "#dfb213";
              } else {
                return "#af0505";
              }
            },
          },
        },
      ],
      grid: {
        width: "90%",
        left: "5%",
        top: "10%",
        bottom: "10%",
      },
    });

    window.addEventListener("resize", () => {
      myChart.resize();
    });
  }, []);

  return <div id="chart" className="w-full h-full" />;
};

export default AcChart;
