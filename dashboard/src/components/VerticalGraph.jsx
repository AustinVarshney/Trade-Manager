import { Bar } from "react-chartjs-2";


const VerticalGraph = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Holdings</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                font: {
                  size: 14,
                },
              },
            },
          }
        }}
      />
    </div>
  );
};

export default VerticalGraph;