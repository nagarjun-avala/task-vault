"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ExpenseList from "./ExpenseList";
import AddExpenseDialog from "./AddExpenseDialog";
import ExpenseChart from "./ExpenseChart";

const initialTransactions = [
  { amount: 1200, description: "Salary", category: "Income", date: "2024-11-01" },
  { amount: 200, description: "Groceries", category: "Food", date: "2024-11-02" },
  { amount: 50, description: "Coffee", category: "Food", date: "2024-11-03" },
  { amount: 300, description: "Internet Bill", category: "Utilities", date: "2024-11-05" },
  { amount: 100, description: "Gym Membership", category: "Health", date: "2024-11-07" },
  { amount: 250, description: "Clothing", category: "Shopping", date: "2024-11-10" },
  { amount: 400, description: "Dining Out", category: "Food", date: "2024-11-15" },
  { amount: 150, description: "Taxi Fare", category: "Transport", date: "2024-11-18" },
  { amount: 1800, description: "Freelance Project", category: "Income", date: "2024-11-20" },
  { amount: 75, description: "Movie Tickets", category: "Entertainment", date: "2024-11-22" },
  { amount: 600, description: "Car Maintenance", category: "Transport", date: "2024-11-25" },
  { amount: 200, description: "Electricity Bill", category: "Utilities", date: "2024-11-26" },
];


export default function ExpenseTracker() {
  const [transactions, setTransactions] = React.useState(initialTransactions);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Expense Tracker</CardTitle>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Expense
          </Button>
        </CardHeader>
        <CardContent>
          <ExpenseList transactions={transactions} />
          <AddExpenseDialog open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
            transactions={transactions}
            setTransactions={setTransactions} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Expense Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ExpenseChart transactions={transactions} />
        </CardContent>
      </Card>
    </div>
  );
}