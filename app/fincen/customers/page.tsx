import { CustomersTable, SarShell } from "@/components/sar-app";

export default function CustomersPage() {
  return (
    <SarShell title="SAR Case" primaryCta="Submit Form" mainTab="customers">
      <CustomersTable />
    </SarShell>
  );
}
