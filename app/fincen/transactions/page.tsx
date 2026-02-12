import { SarShell, TransactionsTable } from "@/components/sar-app";

export default function TransactionsPage() {
  return (
    <SarShell title="SAR Case" primaryCta="Submit Form" mainTab="transactions">
      <TransactionsTable />
    </SarShell>
  );
}
