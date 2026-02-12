import { SarFormFrame, SarShell } from "@/components/sar-app";

const narrative = `On October 10, 2025, John Doe (Account #987654321) conducted a series of cash deposits totaling $45,000 across multiple transactions within a 24-hour period at various branch locations. Each individual deposit was structured to remain below the $10,000 reporting threshold.\n\nThe pattern observed includes:\n- 10/10/2025 9:15 AM: $9,800 deposit at Main Street Branch\n- 10/10/2025 11:30 AM: $9,500 deposit at Oak Avenue Branch\n- 10/10/2025 2:45 PM: $9,900 deposit at River Road Branch\n- 10/10/2025 4:20 PM: $9,700 deposit at Highland Plaza Branch\n- 10/10/2025 5:50 PM: $6,100 deposit at Downtown Center Branch\n\nThis activity is inconsistent with the customer's historical banking patterns and stated business purpose. The account holder operates a small retail business with typical monthly deposits ranging from $5,000-$8,000. Prior to this date, the account had never received deposits exceeding $3,000 in a single transaction.\n\nWhen questioned by branch staff about the source of funds during the last transaction, the customer provided vague responses and appeared nervous. The customer stated the funds were from \"business sales\" but could not provide supporting documentation when requested.\n\nAccount surveillance reveals no legitimate business reason for the structured deposit pattern. The deliberate spacing of transactions and use of multiple branches suggests an attempt to evade reporting requirements under the Bank Secrecy Act.`;

export default function NarrativePage() {
  return (
    <SarShell title="SAR Case" primaryCta="Submit Form" mainTab="form">
      <SarFormFrame activeStep="narrative" progress="100%" ready>
        <section className="form-content full">
          <h3>Part 5 - Narrative</h3>
          <p>Provide a chronological account of the suspicious activity with specific details</p>

          <label className="narrative-block">
            <textarea value={narrative} readOnly />
          </label>

          <div className="form-actions">
            <button type="button" className="ghost">Previous</button>
          </div>
        </section>
      </SarFormFrame>
    </SarShell>
  );
}
