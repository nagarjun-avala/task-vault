import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TaskManager from "@/components/TaskManager";
import ExpenseTracker from "@/components/ExpenseTracker";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="tasks" className="space-y-4">
        TaskManager
          <TaskManager />
        </TabsContent>
        <TabsContent value="expenses" className="space-y-4">
        ExpenseTracker
          <ExpenseTracker />
        </TabsContent>
      </Tabs>
    </div>
  );
}
