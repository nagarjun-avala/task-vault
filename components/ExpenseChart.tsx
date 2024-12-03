import { Expense } from "@prisma/client";
import React from "react";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ExpenseChart({ transactions }: { transactions: Expense[] }) {
  // Aggregate data by date

  return (
    <div className="h-[300px]">
      Expense Chart
    </div>
  );
}
