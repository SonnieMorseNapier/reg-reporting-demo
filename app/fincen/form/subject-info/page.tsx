import { SarFormFrame, SarShell, SubjectsList } from "@/components/sar-app";

export default function SubjectInfoPage() {
  return (
    <SarShell title="SAR Case" primaryCta="Submit Form" mainTab="form">
      <SarFormFrame activeStep="subject" progress="32%">
        <div className="subject-layout">
          <SubjectsList />

          <section className="form-content">
            <div className="form-headline">
              <h3>Part 1 - Subject Information</h3>
              <button type="button">Add Subject</button>
            </div>
            <p>Provide information about individuals or entities involved in the suspicious activity</p>

            <h4>1. Basic Information</h4>
            <div className="field-grid two">
              <label>
                Subject Type
                <input value="Individual" readOnly />
              </label>
              <label>
                Subject Role
                <input value="Subject" readOnly />
              </label>
            </div>

            <h4>2. Personal Information</h4>
            <div className="field-grid three">
              <label>
                Last Name
                <input value="Smith" readOnly />
              </label>
              <label>
                First Name
                <input value="John" readOnly />
              </label>
              <label>
                Middle Name
                <input value="" readOnly />
              </label>
            </div>

            <div className="field-grid two">
              <label>
                Date of Birth
                <input value="DD / MM / YYYY" readOnly />
              </label>
              <label>
                SSN / TIN / EIN
                <input value="xxx-xx-xxxx" readOnly />
              </label>
            </div>

            <div className="form-actions">
              <button type="button" className="ghost">Previous</button>
              <button type="button" className="dark">Continue to II - Suspicious Activity</button>
            </div>
          </section>
        </div>
      </SarFormFrame>
    </SarShell>
  );
}
