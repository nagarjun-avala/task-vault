"use client";
import React from "react";
import { formatCurrency, formatDate } from "@/lib/utils";

interface Transaction {
  amount: number;
  description: string;
  category: string;
  date: string;
}

export default function ExpenseList({ transactions }: { transactions: Transaction[] }) {
  return (
    <div className="space-y-4">
      {transactions.map((transaction,index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-lg border p-4"
        >
          <div>
            <h3 className="font-medium">{transaction.description}</h3>
            <p className="text-sm text-muted-foreground">
              {formatDate(transaction.date ,'en-US',{ month: "short", day: "numeric", year: "numeric" })}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium">{formatCurrency(transaction.amount)}</p>
            <p className="text-sm text-muted-foreground">{transaction.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
