"use client";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="p-4 max-w-sm mx-auto">
      <h1 className="text-2xl mb-4 text-center">Home Task Manager</h1>
      <TodoList />
    </main>
  );
}