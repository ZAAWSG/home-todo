"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import StatusEditor from "./StatusEditor";

type Todo = {
  id: number;
  title: string;
  status: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const { data, error } = await supabase.from("todos").select("*");
    if (error) console.error(error);
    setTodos(data || []);
  }

  async function updateStatus(id: number, newStatus: string) {
    await supabase.from("todos").update({ status: newStatus }).eq("id", id);
    await fetchTodos();
  }

  return (
    <ul>
      {todos.sort((a, b) => a.id - b.id).map((todo) => (
        <li key={todo.id} className="mb-4 p-2 border rounded-md">
          <div className="flex flex-col justify-between items-center">
            <span className="font-semibold">{todo.title}</span>
            <StatusEditor
              todo={todo}
              changeStatus={(newStatus) => updateStatus(todo.id, newStatus)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
