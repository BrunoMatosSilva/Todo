import { createContext, ReactNode, useState } from "react";
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
    completedTasks: (taskId: string) => void;
}

type TaskContextProviderProps = {
    children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextType);

export function TaskContextProvider(props: TaskContextProviderProps) {

    const [tasks, setTasks] = useState<ITask[]>([])

    function addTask(taskTitle: string) {
        setTasks([...tasks, {
            id: uuidv4(),
            title: taskTitle,
            isCompleted: false,
        }]);
    }

    function deleteTask(taskId: string) {
        const newTask = tasks.filter(task => task.id !== taskId);
        setTasks(newTask);
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
        setTasks(newTasks);
    }


    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, completedTasks }}>
            {props.children}
        </TaskContext.Provider>
    );

}