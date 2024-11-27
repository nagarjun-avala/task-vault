import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Task } from '@prisma/client';

interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tasks: Array<{
    title: string;
    description: string;
    dueDate: string;
  }>;
  setTasks: React.Dispatch<React.SetStateAction<tasks>>;
}

export default function AddTaskDialog({
  open,
  onOpenChange,
  tasks,
  setTasks,
}: AddTaskDialogProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  const [loading, setLoading] = React.useState(false);


  const handleAddTask = () => {
    try {
      setLoading(true)
      setTasks([
        ...tasks,
        {
          title,
          description,
          dueDate,
        },
      ]);
      onOpenChange(false);
      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Task"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}