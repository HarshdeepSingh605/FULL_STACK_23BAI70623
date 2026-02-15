import './DashBoard.css';
import Header from "../components/Header";
import logs from "../data/logs";

function DashBoard() {
  const totalEmissions = logs.reduce((accumulator, currentValue) => accumulator + currentValue.carbon, 0);

  return (
    <div className="dashboard">
      <Header title="Dashboard"></Header>
      <div className="dashboard-header">
        <div className="total-emissions">
          <h2>Total Carbon Emissions</h2>
          <div className="emission-value">{totalEmissions} kg CO2</div>
        </div>
      </div>
      <div className="logs-section">
        <h3>Activity Log</h3>
        <ul className="logs-list">
          {logs.map(log => (
            <li key={log.id} className="log-item">
              <span className="log-item-activity">{log.activity}</span>
              <span className="log-item-value">{log.carbon} kg CO2</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default DashBoard;