type Stat = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
};

type Report = {
  name: string;
  regulator: string;
  dueDate: string;
  owner: string;
  status: "Draft" | "Review" | "Ready" | "Submitted";
};

const stats: Stat[] = [
  { label: "Open filings", value: "14", delta: "+2 this week", trend: "up" },
  { label: "At risk", value: "3", delta: "-1 in 24h", trend: "down" },
  { label: "Submitted", value: "27", delta: "+8 this month", trend: "up" },
  { label: "Avg cycle", value: "4.3 days", delta: "-0.7 days", trend: "down" }
];

const reports: Report[] = [
  {
    name: "Liquidity Coverage Ratio",
    regulator: "Federal Reserve",
    dueDate: "Feb 16",
    owner: "M. Carson",
    status: "Review"
  },
  {
    name: "Capital Adequacy Return",
    regulator: "OCC",
    dueDate: "Feb 18",
    owner: "L. Patel",
    status: "Draft"
  },
  {
    name: "Operational Risk Event Log",
    regulator: "FDIC",
    dueDate: "Feb 20",
    owner: "D. Flores",
    status: "Ready"
  },
  {
    name: "Stress Test Disclosure",
    regulator: "SEC",
    dueDate: "Feb 26",
    owner: "K. Brooks",
    status: "Submitted"
  }
];

function statusClass(status: Report["status"]): string {
  switch (status) {
    case "Draft":
      return "status-chip draft";
    case "Review":
      return "status-chip review";
    case "Ready":
      return "status-chip ready";
    case "Submitted":
      return "status-chip submitted";
    default:
      return "status-chip";
  }
}

export function ReportingDashboard() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Regulatory Reporting Platform</p>
        <h1>Track, validate, and submit filings without spreadsheet drift.</h1>
        <p className="hero-copy">
          Centralize deadlines, reviewer approvals, and submission evidence across regulators.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" type="button">
            Create Filing Package
          </button>
          <button className="secondary-btn" type="button">
            View Audit Trail
          </button>
        </div>
      </section>

      <section className="stats-grid" aria-label="Metrics">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <p className="stat-label">{item.label}</p>
            <p className="stat-value">{item.value}</p>
            <p className={item.trend === "up" ? "trend up" : "trend down"}>{item.delta}</p>
          </article>
        ))}
      </section>

      <section className="table-panel" aria-label="Upcoming reports">
        <div className="panel-header">
          <h2>Upcoming Reports</h2>
          <button className="text-btn" type="button">
            Filter by regulator
          </button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Report</th>
                <th>Regulator</th>
                <th>Due date</th>
                <th>Owner</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.name}>
                  <td>{report.name}</td>
                  <td>{report.regulator}</td>
                  <td>{report.dueDate}</td>
                  <td>{report.owner}</td>
                  <td>
                    <span className={statusClass(report.status)}>{report.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
