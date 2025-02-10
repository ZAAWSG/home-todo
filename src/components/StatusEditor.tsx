"use client";
import { useEffect, useState } from "react";

type Todo = {
    id: number;
    title: string;
    status: string;
};

type StatusEditorProps = {
    todo: Todo;
    changeStatus: (newStatus: string) => void;
};

export default function StatusEditor({ todo, changeStatus }: StatusEditorProps) {
    const [status, setStatus] = useState(todo.status);

    useEffect(() => {
        setStatus(todo.status);
    }, [todo.status]);


    return (
        <div className="flex flex-col items-center gap-2">
            <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="p-1 border rounded-md"

            />
            <div className="flex gap-2">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                    onClick={() => changeStatus(status.trim())}
                >
                    Поменять статус
                </button>
                <button
                    type="button"
                    className="bg-green-500 text-white px-3 py-1 rounded-md"
                    onClick={() => changeStatus('Чисто')}
                >
                    Выполнено
                </button>

            </div>
        </div>
    );
}


