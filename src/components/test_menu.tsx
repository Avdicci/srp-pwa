import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedList() {
const SimpleList = () => {
    const [todos, setTodos] = useState([
    { id: 3, text: "Todo 3" },
    { id: 2, text: "Todo 2" },
    { id: 1, text: "Todo 1" },
    ]);

    const addTodo = () => {
    const newId = Math.max(...todos.map((t) => t.id)) + 1;
    setTodos([{ id: newId, text: `Todo ${newId}` }, ...todos]);
    };

    const removeTodo = (todo: { id: number; text: string }) => {
    setTodos((currentTodos) => currentTodos.filter((t) => t.id !== todo.id));
    };

    return (
    <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg border border-border">
        <button
        onClick={addTodo}
        className="w-full mb-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
        Add Todo
        </button>
        <ul className="space-y-2">
        <AnimatePresence initial={false}>
            {todos.map((todo) => (
            <motion.li
            key={todo.id}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <button
                onClick={() => removeTodo(todo)}
                className="w-full p-3 text-left bg-muted hover:bg-muted/70 rounded-md border border-border text-foreground transition-colors flex justify-between items-center group"
                >
                <span>{todo.text}</span>
                <span className="opacity-0 group-hover:opacity-100 text-destructive">
                    ✖️
                </span>
                </button>
            </motion.li>
            ))}
        </AnimatePresence>
        </ul>
    </div>
    );
};

return (
    <div className="min-h-screen bg-background p-8 dark">
    <h1 className="text-2xl font-bold text-center mb-8 text-foreground">
        Simple Animated Todo List
    </h1>
    <SimpleList />
    </div>
);
}
