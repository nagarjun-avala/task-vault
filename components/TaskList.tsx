import React from "react";
import { Task } from "@prisma/client";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDate } from "@/lib/utils";

export default function TaskList({tasks}:{tasks:Task[]}) {
  const [isLoading,setIsLoading] = React.useState(false)

  if (isLoading) return <div>Loading tasks...</div>;

  return (
    <div className="space-y-4">
      {tasks?.map((task) => (
        <div
          key={task.id}
          className="flex items-center space-x-4 rounded-lg border p-4"
        >
          <Checkbox
            checked={task.completed}
            onCheckedChange={async (checked) => {
              await fetch(`/api/tasks/${task.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ completed: checked }),
              });
            }}
          />
          <div className="flex-1">
            <h3 className="font-medium">{task.title}</h3>
            {task.description && (
              <p className="text-sm text-muted-foreground">{task.description}</p>
            )}
            {task.dueDate && (
              <p className="text-sm text-muted-foreground">
                Due: {formatDate(new Date(task.dueDate))}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}