import { SarFormFrame, SarShell } from "@/components/sar-app";

export default function SuspiciousActivityPage() {
  return (
    <SarShell title="SAR Case" primaryCta="Submit Form" mainTab="form">
      <SarFormFrame activeStep="suspicious" progress="32%">
        <section className="form-content full">
          <h3>Part 2 - Suspicious Activity</h3>
          <p>Describe the suspicious activity and indicate the type(s) of suspicious activity being reported.</p>

          <h4>Activity Date Range</h4>
          <p>Specify the date range during which the suspicious activity occurred.</p>
          <div className="field-grid two">
            <label>
              From Date
              <input value="01/11/2025" readOnly />
            </label>
            <label>
              To Date
              <input value="11/11/2025" readOnly />
            </label>
          </div>

          <h4>Amount Involved</h4>
          <p>Total dollar amount of known of suspected proceeds from the suspicious activity</p>
          <div className="field-grid two">
            <label>
              Total Amount (USD)
              <input value="$127,450.00" readOnly />
            </label>
            <label>
              Aggregate Amount if Multiple Transactions
              <input value="" readOnly />
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="ghost">Previous</button>
            <button type="button" className="dark">Continue to III - Financial Institution</button>
          </div>
        </section>
      </SarFormFrame>
    </SarShell>
  );
}
