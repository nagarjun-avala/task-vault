"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TaskList from "./TaskList";
import AddTaskDialog from "./AddTaskDialog";

const initialTasks = [{
  id: "1",
  title: "Test Title",
  description: "Test DESC" ,
  dueDate: Date.now()+1000000000,
  userId: "1",}]

export default function TaskManager() {
  const [tasks, setTasks] = React.useState(initialTasks);
  const [open, setOpen] = React.useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Task Manager</CardTitle>
        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </CardHeader>
      <CardContent>
        <TaskList tasks={tasks} />
        <AddTaskDialog   open={open}  onOpenChange={setOpen}  tasks={tasks}  setTasks={setTasks} />
      </CardContent>
    </Card>
  );
}