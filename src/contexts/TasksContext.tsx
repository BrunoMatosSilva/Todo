import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
    id: string;
    title: string;
    isCompleted: boolean;
}

type TaskContextType = {
    tasks: ITask[];
    addTask: (taskTitle: string) => void;
    deleteTask: (taskId: string) => void;
    editTask: (taskId: string, taskTitle: string) => void;
    completedTasks: (taskId: string) => void;
}

type TaskContextProviderProps = {
    children: ReactNode;
}

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export const TaskContext = createContext({} as TaskContextType);

export function TaskContextProvider(props: TaskContextProviderProps) {

    const [tasks, setTasks] = useState<ITask[]>([]);

    function loadSavedTasks() {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }

    useEffect(() => {
        loadSavedTasks();
    }, []);

    function setTasksAndSave(newTasks: ITask[]) {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    }

    function addTask(taskTitle: string) {
        setTasksAndSave([...tasks, {
            id: uuidv4(),
            title: taskTitle,
            isCompleted: false,
        }]);
    }

    function deleteTask(taskId: string) {
        const newTask = tasks.filter(task => task.id !== taskId);
        setTasksAndSave(newTask);
    }

    function editTask(taskId: string, taskTitle: string) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    title: taskTitle,
                }
            }
            return task;
        });
        setTasksAndSave(newTasks);
    }

    function completedTasks(taskId: string) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                }
            }
            return task;
        });
        setTasksAndSave(newTasks);
    }


    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, completedTasks }}>
            {props.children}
        </TaskContext.Provider>
    );

}