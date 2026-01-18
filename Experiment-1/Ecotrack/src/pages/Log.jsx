import './Log.css';
import logs from "../data/logs";

function Log() {
    const highEmissions = logs.filter(log => log.carbon >= 4);
    const lowEmissions = logs.filter(log => log.carbon < 4);

    return (
        <div className="log-container">
            <section className="log-section high-emissions">
                <h3>🔴 High Carbon Emission Activities</h3>
                <ul className="log-list">
                    {highEmissions.map((log) => (
                        <li key={log.id} className="log-item high-emission">
                            <span className="log-activity">{log.activity}</span>
                            <span className="log-value">{log.carbon} kg CO2</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="log-section low-emissions">
                <h3>🟢 Low Carbon Emission Activities</h3>
                <ul className="log-list">
                    {lowEmissions.map((log) => (
                        <li key={log.id} className="log-item low-emission">
                            <span className="log-activity">{log.activity}</span>
                            <span className="log-value">{log.carbon} kg CO2</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Log;