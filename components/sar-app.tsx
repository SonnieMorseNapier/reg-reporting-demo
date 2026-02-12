import Link from "next/link";
import type { ReactNode } from "react";

type MainTabKey = "form" | "transactions" | "customers" | "notes" | "attachments" | "activity";

type StepKey = "subject" | "suspicious" | "institution" | "contact" | "narrative";

type ShellProps = {
  title: string;
  primaryCta: string;
  mainTab: MainTabKey;
  children: ReactNode;
};

type FormFrameProps = {
  activeStep: StepKey;
  progress: string;
  ready?: boolean;
  children: ReactNode;
};

const customerRows = [
  ["CX-592837", "John Smith", "Person", "Male", "2025-01-15"],
  ["CX-987654", "Ethan Williams", "Person", "Male", "2025-02-28"],
  ["CX-345678", "Olivia Brown", "Person", "Female", "2025-03-10"],
  ["CX-456789", "Noah Davis", "Person", "Male", "2025-04-05"],
  ["CX-234567", "Isabella Miller", "Person", "Female", "2025-05-22"],
  ["CX-789012", "Liam Wilson", "Person", "Male", "2025-06-18"],
  ["CX-890123", "Mia Moore", "Person", "Female", "2025-07-01"],
  ["CX-654321", "Jackson Taylor", "Person", "Male", "2025-08-14"]
];

const transactionRows = [
  ["TX555222888", "999,000  USD", "Acme Studio", "CC2999", "Hernandez Corp", "11/10/2025 09:15"],
  ["TX102938475", "98,000  USD", "John Smith", "BB9274", "Arroyo Group", "05/10/2025 18:47"],
  ["TX129475839", "92,000  USD", "John Smith", "BB9274", "Kwame Invest", "23/10/2025 14:32"],
  ["TX987654321", "87,000  USD", "Jane Smith", "VH8792", "Lamar Odom", "19/10/2025 02:59"],
  ["TX876543219", "82,000  USD", "John Smith", "BB9274", "Portman Inc", "27/10/2025 16:53"],
  ["TX678905432", "76,000  USD", "Acme Studio", "CC2999", "Stamos LLC", "02/10/2025 07:38"],
  ["TX234567890", "61,000  USD", "Acme Studio", "CC2999", "Global Tech", "15/10/2025 20:04"],
  ["TX384756920", "54,000  USD", "Jane Smith", "VH8792", "Rivera Group", "30/10/2025 11:21"]
];

function topTabClass(active: boolean): string {
  return active ? "top-tab top-tab-active" : "top-tab";
}

function stepClass(active: boolean): string {
  return active ? "sar-step sar-step-active" : "sar-step";
}

export function SarShell({ title, primaryCta, mainTab, children }: ShellProps) {
  return (
    <div className="sar-root">
      <header className="global-header">
        <div className="brand">NAPIERAI CONTINUUM</div>
        <nav className="global-nav" aria-label="Main">
          <span>Analytics</span>
          <span className="global-active">Task Management</span>
          <span>Entities</span>
          <span>CS</span>
          <span>TS</span>
          <span>TM</span>
        </nav>
        <div className="global-user">OM</div>
      </header>

      <main className="sar-main">
        <section className="case-header">
          <div className="case-title-wrap">
            <h1>{title}</h1>
            <p>Step 1 of 3</p>
            <span className="draft-pill">DRAFT</span>
            <span>Michael Rogers</span>
            <span className="linkish">Reassign</span>
            <span>2025-06-24</span>
            <span>2025-06-24, 08:00</span>
          </div>
          <div className="case-actions">
            <button className="menu-dot" type="button" aria-label="More actions">
              ...
            </button>
            <button className="primary-action" type="button">
              {primaryCta}
            </button>
          </div>
        </section>

        <section className="top-tabs" aria-label="Case tabs">
          <Link href="/fincen/form/subject-info" className={topTabClass(mainTab === "form")}>
            Form
          </Link>
          <Link href="/fincen/transactions" className={topTabClass(mainTab === "transactions")}>
            Transactions
          </Link>
          <Link href="/fincen/customers" className={topTabClass(mainTab === "customers")}>
            Customers
          </Link>
          <span className={topTabClass(mainTab === "notes")}>Notes</span>
          <span className={topTabClass(mainTab === "attachments")}>Attachments</span>
          <span className={topTabClass(mainTab === "activity")}>Activity Log</span>
        </section>

        {children}
      </main>
    </div>
  );
}

export function CustomersTable() {
  return (
    <section className="content-panel">
      <div className="table-filters">
        <input className="search-box" type="text" value="Search..." readOnly />
      </div>
      <div className="grid-table-wrap">
        <table className="sar-table">
          <thead>
            <tr>
              <th></th>
              <th>Customer Number</th>
              <th>Customer Name</th>
              <th>Customer Type</th>
              <th>Gender</th>
              <th>Onboarding Date</th>
            </tr>
          </thead>
          <tbody>
            {customerRows.map((row) => (
              <tr key={row[0]}>
                <td>
                  <span className="fake-check" />
                </td>
                <td className="blue-link">{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <span>Showing 8 of 8 items</span>
        <span>Rows per page 10</span>
      </div>
    </section>
  );
}

export function TransactionsTable() {
  return (
    <section className="content-panel">
      <div className="table-filters row-gap">
        <input className="search-box" type="text" value="Search..." readOnly />
        <input className="search-box narrow" type="text" value="All" readOnly />
      </div>
      <div className="grid-table-wrap">
        <table className="sar-table">
          <thead>
            <tr>
              <th></th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Originator</th>
              <th>Originator ID</th>
              <th>Beneficiary</th>
              <th>Transaction Dates</th>
            </tr>
          </thead>
          <tbody>
            {transactionRows.map((row, index) => (
              <tr key={row[0]} className={index === 2 ? "highlight-row" : ""}>
                <td>
                  <span className={index < 2 ? "fake-check filled" : "fake-check"} />
                </td>
                <td className="blue-link">{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <span>Showing 8 of 8 items</span>
        <span>Rows per page 10</span>
      </div>
      <div className="sticky-action">
        <span>2 Transactions Selected</span>
        <button type="button">Export</button>
        <button type="button">Clear Selection</button>
      </div>
    </section>
  );
}

export function SarFormFrame({ activeStep, progress, ready, children }: FormFrameProps) {
  return (
    <section className="form-shell">
      <header className="form-head">
        <h2>FinCEN Suspicious Activity Report (SAR)</h2>
        {ready ? <span className="ready-pill">READY TO SUBMIT</span> : null}
        <div className="form-head-right">
          <span className="autosave">Auto-saved</span>
          <span>{progress} Complete</span>
        </div>
      </header>

      <nav className="sar-steps" aria-label="Form sections">
        <Link href="/fincen/form/subject-info" className={stepClass(activeStep === "subject")}>
          I - Subject Information
        </Link>
        <Link href="/fincen/form/suspicious-activity" className={stepClass(activeStep === "suspicious")}>
          II - Suspicious Activity
        </Link>
        <span className={stepClass(activeStep === "institution")}>III - Financial Institution</span>
        <span className={stepClass(activeStep === "contact")}>IV - Contact Office</span>
        <Link href="/fincen/form/narrative" className={stepClass(activeStep === "narrative")}>
          V - Narrative
        </Link>
      </nav>

      <div className="form-body">{children}</div>
    </section>
  );
}
